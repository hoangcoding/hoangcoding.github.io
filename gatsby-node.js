const { performance } = require('perf_hooks')
const chalk = require('chalk')
const axios = require('axios')
const fs = require('fs')
const yaml = require('js-yaml')
const reposYaml = yaml.load(fs.readFileSync('./content/repos.yml', 'utf8'))

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

//
// Get GitHub repos
//
const gitHubConfig = {
  headers: {
    'User-Agent': 'hoangcoding',
    Authorization: `token ${process.env.GATSBY_GITHUB_TOKEN}`
  }
}

async function getGithubRepos(data) {
  let repos = []
  let holder = {}
  for (let item of data) {
    const user = item.split('/')[0]
    const repoName = item.split('/')[1]
    const repo = await axios.get(
      `https://api.github.com/repos/${user}/${repoName}`,
      gitHubConfig
    )

    holder.name = repo.data.name
    holder.full_name = repo.data.full_name
    holder.description = repo.data.description
    holder.html_url = repo.data.html_url
    holder.homepage = repo.data.homepage
    holder.stargazers_count = repo.data.stargazers_count
    holder.pushed_at = repo.data.pushed_at
    repos.push(holder)
    holder = {}
  }

  // sort by pushed to, newest first
  repos = repos.sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))

  return repos
}
// You can delete this file if you're not using it
let repos

exports.onPreBootstrap = async () => {
  const t0 = performance.now()

  try {
    repos = await getGithubRepos(reposYaml)
    const t1 = performance.now()
    const ms = t1 - t0
    const s = ((ms / 1000) % 60).toFixed(3)
    console.log(
      chalk.green('success ') + `getGithubRepos: ${repos.length} repos - ${s} s`
    )
  } catch (error) {
    throw Error(error.message)
  }
}

//
// Add repos to front page's context
//
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path === '/')
    createPage({
      ...page,
      context: {
        ...page.context,
        repos
      }
    })
}