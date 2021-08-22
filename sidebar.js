import React from 'react'
import "./sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter'
import sidebaroption from './sidebaroption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutlineOutlined'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Button } from '@material-ui/core'

function Sidebar() {
    return (
        <div className = "sidebar">
           <TwitterIcon
              className = "sidebar__twitterIcon"                
           /> 

           <sidebaroption active
              Icon = {HomeIcon}
              text = "Home"  
           />
           <sidebaroption 
              Icon = {SearchIcon}
              text = "Explore"  
           />
           <sidebaroption 
              Icon = {NotificationsNoneIcon}
              text = "Notifications"  
           />
           <sidebaroption 
              Icon = {MailOutlineIcon}
              text = "Message"  
           />
           <sidebaroption 
              Icon = {BookmarkBorderIcon}
              text = "Bookmarks"  
           />
           <sidebaroption
              Icon = {ListAltIcon} 
              text = "Lists"  
           />
           <sidebaroption 
              Icon = {PermIdentityIcon}
              text = "Profile"  
           />
           <sidebaroption 
              Icon = {MoreHorizIcon}
              text = "More"  
           />
           <Button variant = "outlined" className = "sidebar__tweet">Tweet</Button>
        </div>
    )
}

export default Sidebar