import React, { useEffect } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

export default function Header(props) {
  const location = useLocation()
  const currentPath = location.pathname
  const [currentLocation, setCurrentLocation] = React.useState(currentPath)

  useEffect(() => {
    setCurrentLocation(location.pathname)
  }, [location.pathname])

  const links = [
    { link: '/', title: 'Home' },
    {
      link: '/category',
      title: 'Category',
      options: [
        { link: '/category/option1', title: 'Gents' },
        { link: '/category/option2', title: 'Ladies' },
        { link: '/category/option3', title: 'Kids' },
      ],
    },
    { link: '/signup', title: 'Sign Up' },
    { link: '/login', title: 'Login' },
  ]

  const getCurrentLinkStyle = (data) => {
    let condition = currentLocation === data.link
    return {
      background: condition ? 'var(--main-color)' : '',
      color: condition ? '#11111' : '',
      boxShadow: condition
        ? 'rgba(0, 0, 0, 0.25) 2px 14px 28px, rgba(0, 0, 0, 0.22) 2px 10px 10px'
        : '',
    }
  }

  return (
    <div className="header-wrapper">
      <nav>
        <ul>
          {links.map((item) => (
            <li key={item.link}>
              {item.options ? (
                <div className="dropdown">
                  <Link style={getCurrentLinkStyle(item)} to={item.link}>
                    {item.title}
                  </Link>
                  <ul className="dropdown-menu">
                    {item.options.map((option) => (
                      <li key={option.link}>
                        <Link to={option.link}>{option.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link style={getCurrentLinkStyle(item)} to={item.link}>
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
