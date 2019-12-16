import React, { memo } from 'react'

// https://featherstyles.com
// import * as Feather from 'react-feather'
import {
  ArrowDownCircle,
  Edit,
  GitHub,
  Linkedin,
  Rss,
  Sun,
  Moon,
  Compass,
  FileText,
  Key,
  Image,
  Book,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  Award,
  BookOpen,
  Star,
  Info
} from 'react-feather'
import styles from './Icon.module.scss'


interface LooseObject {
  [key: string]: any
}
const Icon = memo(({ name, ...props }: {name: string}) => {
  const components: LooseObject = {
    Email: Mail,
    Link: Compass,
    Download: ArrowDownCircle,
    'Info & Download': ArrowDownCircle,
    Styleguide: FileText,
    Blog: Edit,
    Keybase: Key,
    ArrowDownCircle,
    Edit,
    GitHub,
    Linkedin,
    Rss,
    Sun,
    Moon,
    Compass,
    FileText,
    Key,
    Image,
    Resume: Book,
    Mail,
    MapPin,
    Globe,
    Briefcase,
    Award,
    BookOpen,
    Star,
    Info
  };

  const IconMapped = components[name]
  // const IconComp = Feather[name]
  if (!IconMapped) return null

  return <IconMapped className={styles.icon} {...props} />
})

Icon.displayName = 'Icon'

export default Icon
