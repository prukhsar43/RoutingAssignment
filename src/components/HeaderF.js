import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import style from './Header.module.css'


const { Header } = Layout;

const HeaderF = () => {
const menuItems=[
  {
    "title":"Mounting",
    "link":"/mounting"
  },
  {
    "title":"Updating",
    "link":"/updating"
  },
  {
    "title":"Unmounting",
    "link":"/unmounting"
  }

]

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Component Life Cycle</h1>

    <Menu   mode="horizontal" defaultSelectedKeys={['2']} className={style.menu}>
      {menuItems.map((ele, index) => {
       
        return <Menu.Item key={index}>  <Link to={ele.link}>{ele.title}</Link> </Menu.Item>;
      })}
    </Menu>
  
  </div>
  )
}

export default HeaderF