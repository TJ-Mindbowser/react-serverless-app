import React, { useRef, useState } from 'react'
import Main from '../components/Main'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import 'antd/dist/antd.min.css'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/userSlice'
import { Modal, notification } from 'antd'
import Login from '../components/forms/Login'
const { warning } = Modal

export default function App() {
    const formRef = useRef({})
    const userInfo = useSelector((state) => state.authSlice)
    const dispatch = useDispatch()
    const [showLoginModal, setShowLoginModal] = useState(false)
    const showModal = () => {
        warning({
            title: 'Please enable cors via extension',
            content: 'Project is in its initials phases ;)',
        });
    }
    const showLogin = () => {
        setShowLoginModal(true)
    }
    const checkIsLoggedIn = () => {
        const { isLoggedIn } = userInfo
        console.log("🚀 ~ file: App.js ~ line 21 ~ checkIsLoggedIn ~ isLoggedIn", isLoggedIn)
        !isLoggedIn && showLogin()
    }
    const handleFormSubmit = (e) => {
        console.log("🚀 ~ file: App.js ~ line 34 ~ handleFormSubmit ~ e", e)
        if (e.name === 'Tanishq' && e.password === 'test123') {
            dispatch(login())
            setShowLoginModal(false)
            notification.success({
                message: `Logged in successfull`
            })
        }
        else {
            notification.error({
                message: `Invalid UserName or Password`
            })
        }
        dispatch(login())
    }
    useState(() => {
        showModal()
        checkIsLoggedIn()
    }, [])
    return (
        <div>
            <Nav />
            <div id="layoutSidenav">
                <Sidebar />
                <Main />
            </div>
            <Modal
                title="Login"
                visible={showLoginModal}
                footer={false}
                closable={false}>
                <Login
                    onFinish={handleFormSubmit}
                    formRef={formRef}
                    center />
            </Modal>
        </div>
    )
}
