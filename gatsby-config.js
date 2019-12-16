const path = require("path")
const fs = require("fs")
const resume = require("./content/resume.json")
const { name, website } = resume.basics
require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `My name is Hoang Mai - a code Lover`,
    description: `My personal portfolio website.`,
    author: `@hoangcoding`,
  },
  plugins: [
    "gatsby-transformer-yaml",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: path.join(__dirname, "content"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pkg",
        path: path.join(__dirname, "package.json"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: name.toLowerCase(),
        short_name: "mk",
        start_url: "/",
        background_color: "#e7eef4",
        theme_color: "#e7eef4",
        icon: "src/images/favicon.png",
        display: "standalone",
        cache_busting_mode: "name",
        theme_color_in_head: false, // dynamically set in ThemeSwitch
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/styles`],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark",
        classNameLight: "light",
        minify: true,
      },
    },
    "gatsby-plugin-webpack-size",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
