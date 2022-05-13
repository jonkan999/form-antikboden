import './BasicForm.css';
import {Formik, Field, Form } from 'formik';
import React from 'react';
import formpic from './fairyboys-wof-form-rs.png'
import Viewer from './Viewer.js'

export default class BasicForm extends React.Component {
  state = {
    open: false
  }

  render() {
    return (
      <div className="main-div" >
        
        <img src={formpic} className="formpic"/>
        <h1>Fyll i formuläret, följ oss på insta, och snurra på vårat Wheel of Fortune för chansen att vinna grymma priser!</h1>
        <Formik
          initialValues={{
            business: '',
            email: ''
          }}
          onSubmit={async (values) => {
            /*callAPI(values.business,values.email)*/
            /*console.log(JSON.stringify(values, null, 2));*/
            this.props.newValues({
              business: values.business,
              email: values.email
            })
            console.log(values.business);
            
          }}
        >
          <Form>
          <h1/>
            <label className='form-label' htmlFor="business">Företagsnamn <br/> </label>
            <Field className='form-field'
            id="business"
            name="business"
            placeholder="Cool biz"
            />
            <h1/>  
            <label className='form-label' htmlFor="email">Emailadress <br/> </label>
            <Field className='form-field'
            id="email"
            name="email"
            placeholder="John.Doe@CoolBiz.com"
            />
            <h1/>
            <div>
            <button type="submit" style={{border: "none", backgroundColor: "white"}} onClick={() => this.setState({open:true})}> <i class="fa fa-instagram" aria-hidden="true"></i> </button>
            {this.state.open && <Viewer />}
            </div>

            <button className="submit-button" type="submit" onClick={() => { setTimeout(() => {this.props.startInd(true)}, 1000)}}>
              Spin it
            </button>
            
          </Form>
        </Formik>
      </div>
    );
  }
}