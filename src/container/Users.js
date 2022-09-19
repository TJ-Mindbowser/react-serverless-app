import React, { Component } from 'react'
import { deleteData, getData, postData } from '../helper/interceptor'
import { deleteUser, listUser } from '../helper/endpoint'
import '../styles/custom.css'
import UsersForm from '../components/forms/Users'
import { Spinner } from '../components/Common'
import { Modal, Empty, Button, notification } from 'antd'
import { postUser } from '../helper/endpoint'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import moment from 'moment'
const { confirm } = Modal

var CurrentDate = moment().format();

export default class Users extends Component {
    constructor() {
        super()
        this.formRef = React.createRef()
        this.state = {
            users: [],
            isLoading: true,
            showModal: false,
            user: {},
            modalTitle: 'Add User',
            deleteUser: 0,
            visible: false,
            isButtonLoading: false
        }
    }
    componentDidMount() {
        this.fetchUserList()
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    async fetchUserList() {
        try {
            let response = await getData(listUser)
            if (response.length) {
                this.setState({
                    users: response,
                    isLoading: false
                })
            }
        } catch (error) {
            console.log("🚀 ~ file: Users.js ~ line 18 ~ Users ~ fetchUserList ~ error", error)
        }
    }
    showModal(e) {
        this.setState({
            showModal: true,
            user: e,
            modalTitle: e ? 'Edit User' : 'Add User'
        })
    }
    closeModal(e) {
        this.setState({
            showModal: false,
            user: {},
            modalTitle: 'Add User',
            isButtonLoading: false
        }, () => {
            this.fetchUserList()
            this.formRef.current.resetFields()
        })
    }
    handleClose() {
        this.setState({
            showModal: false,
            user: {}
        }, () => {
            this.formRef.current.resetFields()
        })
    }
    async submitForm(val) {
        try {
            this.setState({
                isButtonLoading: true
            })
            let userDetails = this.state.user
            let data = { ...userDetails, ...val }
            if (!this.state.user) {
                data = { ...userDetails, ...val, ...{ id: CurrentDate } }
            }
            let obj = { url: postUser.url, data }
            const res = await postData(obj)
            if (res) {
                notification.info({
                    message: `Done!!`,
                    description: "The request has been performed"
                });
                this.closeModal()
            }
        } catch (error) {
            console.log("🚀 ~ file: Users.js ~ line 58 ~ Users ~ submitForm ~ error", error)
        }
    }

    showConfirm(userId) {
        console.log("🚀 ~ file: Users.js ~ line 80 ~ Users ~ showConfirm ~ userId", userId)
        confirm({
            title: 'Are you sure ?',
            icon: <ExclamationCircleOutlined />,
            content: 'Once deleted user wont be retrieved',
            async onOk() {
                try {
                    let { url } = deleteUser(userId)
                    console.log("🚀 ~ file: Users.js ~ line 92 ~ Users ~ onOk ~ url", url)
                    await deleteData(url)
                    this.fetchUserList()
                } catch (error) {
                    console.log("🚀 ~ file: Users.js ~ line 93 ~ Users ~ delete ~ error", error)
                }
            },
            onCancel() {

            },
        });
    }
    hideConfirm(userId) {
        this.setState({
            visible: true,
            deleteUserId: 0
        })
    }

    async delete() {
        try {
            await deleteData(deleteUser(this.state.deleteUser).url)
            this.setState({
                visible: false,
                deleteUserId: 0
            })

        } catch (error) {
            console.log("🚀 ~ file: Users.js ~ line 93 ~ Users ~ delete ~ error", error)

        }
    }

    render() {
        const { users,
            user,
            isLoading,
            showModal,
            isButtonLoading,
            modalTitle } = this.state
        return (

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-12 d-flex flex-row-reverse">
                        {/* Section Heading*/}
                        <Button
                            className="section_heading text-center wow fadeInUp"
                            onClick={() => this.showModal()}
                        >
                            Add User
                        </Button>
                    </div>
                </div>
                <div className="row">
                    {

                        !isLoading ?
                            users.length ?
                                users.map((user, index) => {
                                    return (<div className="col-12 col-sm-6 col-lg-3" key={index}>
                                        <div
                                            className="single_advisor_profile wow fadeInUp"
                                            data-wow-delay="0.2s"
                                            style={{
                                                visibility: "visible",
                                                animationDelay: "0.2s",
                                                animationName: "fadeInUp"
                                            }}
                                        >
                                            <div className="advisor_thumb">
                                                <img
                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="single_advisor_details_info">
                                                <div className="col-4 d-flex flex-row-reverse justify-content-around">
                                                    <div className="social-info" onClick={() => this.showModal(user)}>
                                                        <i className="fa fa-pen text-white" />
                                                    </div>
                                                    <div className="social-info" onClick={() => this.showConfirm(user.id)}>
                                                        <i className="fa fa-trash text-white" />
                                                    </div>
                                                </div>
                                                <h6>{user.name}</h6>
                                                <p className="designation">{user.phone}</p>
                                                <p className="designation">{user.address}</p>
                                            </div>
                                        </div>
                                    </div>)
                                })
                                :
                                <Empty
                                    description="No Users" />
                            :
                            <Spinner />
                    }
                </div>
                <Modal
                    title={modalTitle}
                    open={showModal}
                    onCancel={() => this.handleClose()}
                    centered={true}
                    width={800}
                    footer={false}>
                    <UsersForm
                        formRef={this.formRef}
                        detail={user}
                        onFinish={(e) => this.submitForm(e)}
                        loading={isButtonLoading}
                    />
                </Modal>
            </div >
        )
    }
}
