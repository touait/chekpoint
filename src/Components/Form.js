import React from 'react';

const Form= () => {
        return (
            <div className="App">
            <div className="container mt-5">
                <h1>Contact me </h1>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName" required/>
                        </div>
                    <div class="col-md-6">
                    <label for="lasttName" class="form-label">last Name</label>
                    <input type="text" class="form-control" id="lasttName" required/>
                    </div>
                    <div class="col-md-6">
                        <label for="emailInfo" class="form-label">Email</label>
                        <input type="email" class="form-control" id="emailInfo" required/>
                        </div>
                        <div class="col-md-6">
                        <label for="pass" class="form-control">password</label>
                        <input type="password" class="form-control" id="pass"/>
                        </div>
            
            
                        <div class="col-md-6">
                            <label for="numTel" calss="form-label">number telephone</label>
                            <input type="text" calss="form-control"  id="numTel"/>
                        </div>
            
                        
                        <div class="col-md-12">
                            <label for="area" calss="form-control">Text Area</label>
                            <input type="textarea" class="form-control" id="area"/>
                        </div>
                    </form>
                </div>
            
                </div>
        );
    }


export default Form;