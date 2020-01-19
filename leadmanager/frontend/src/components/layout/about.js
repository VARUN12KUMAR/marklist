import React, { Component } from 'react'

export class about extends Component {
    render() {
        return (
            <div className="container-fluid">
                <section className="breadcrumps-section">
                    <div className='container p-1 p-sm-3'>
                        <div className="row">
                            <div className='col-12'>
                                <h2 ><strong>About Me</strong></h2>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">About us</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-company-section">
                <div className='container p-1 p-sm-3'>
                        <div className="row">
                            <div className='col-12 text-center'>
                                <h2 ><strong>About The Project</strong></h2>
                                <hr/>
                                
                            </div>
                            <div className='col-3 text-center p-1 p-sm-3'>
                                <img className="rounded float-left" src="https://scontent.fslv1-1.fna.fbcdn.net/v/t1.0-0/p206x206/65121548_340656149936733_3063647902208360448_n.jpg?_nc_cat=110&_nc_ohc=hQmgg3uiGo0AX_PMvDD&_nc_ht=scontent.fslv1-1.fna&_nc_tp=1002&oh=f8c8d71ce2d72d20601ee00146dacdcf&oe=5ED7FE15" alt="varun"/>
                                <hr/>
                                
                            </div>
                            <div className='col-9 text-center p-1 p-sm-3'>
                                <p>This is full stack react single page application.This project based on adding marks of a perticular subject</p>
                                <p>This application is working as marlist type and also it is fully secured with authentication.Application frontend work on react and backend working on django rest framework.it is fully 
                                    secured.No one can access the data of anyone.data is access by authunticated user which means user should be
                                     registered at this application.</p>
                                     <p>This application is devloped by Varun Kumar which is a studend of Computer Science at Harcourt Butler Technical University</p>
                                     <p>We kept in mind while devloping this application is that the application motive only to add marks of a perticular subject.This 
                                         is full stack single page Application as I mentioned above . </p>

                                <hr/>
                                
                            </div>
                        </div>
                    </div>

                </section>
<footer class="page-footer font-small cyan darken-3">

  <hr/>

  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://www.linkedin.com/in/varun-kumar-a16576179/">@AddMarks</a>
  </div>
  <hr/>

</footer>
                
            
            </div>
        )
    }
}

export default about;
