import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormM = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [option, setOption] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleOption = (e) => {
        setOption(e.target.value);
    }

    const handleReq = (e) => {
        e.preventDefault();
        const user = {
            username: name,
            email: email,
            message: message,
            option: option
        }
        console.log("Controlled Form Data:", user);
        toast.success('Controlled Form Submitted!', {
            position: "top-center",
        });
    }


    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const optionRef = useRef(null);

    const [uncontrolledData, setUncontrolledData] = useState(null);

    const handleUncontrolledSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
            option: optionRef.current.value,
        };

        console.log("Uncontrolled Form Data:", data);

        setUncontrolledData(JSON.stringify(data, null, 2));

        toast.success(`Uncontrolled Form Submitted!`, {
            position: "top-center",
        });
    }


    return (
        <div className="pb-5">


            <Form className='w-50 mt-5 m-auto border border-secondary-subtle p-4 form-control' onSubmit={handleReq}>
                <h2>Controlled Form</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" value={name} onChange={handleName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmail} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter some text" value={message} onChange={handleMessage} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSelect">
                    <Form.Label>Option</Form.Label>
                    <Form.Select aria-label="Default select example" value={option} onChange={handleOption}>
                        <option>Select any options</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" className='mt-3' type="submit">Submit</Button>
            </Form>



            <Form className='w-50 mt-5 m-auto border border-secondary-subtle p-4 form-control' onSubmit={handleUncontrolledSubmit}>
                <h2>Uncontrolled Form</h2>
                <Form.Group className="mb-3" controlId="formBasicNameUncontrolled">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" ref={nameRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmailUncontrolled">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1Uncontrolled">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter some text" ref={messageRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSelectUncontrolled">
                    <Form.Label>Option</Form.Label>
                    <Form.Select aria-label="Default select example" ref={optionRef}>
                        <option>Select any options</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" className='mt-3' type="submit">Submit</Button>

                {

                }
                {uncontrolledData && (
                    <div className="mt-4">
                        <h5>Submitted Data:</h5>
                        <pre className="bg-light p-3 rounded border">
                            <code>
                                {uncontrolledData}
                            </code>
                        </pre>
                    </div>
                )}
            </Form>
        </div>
    )
}

export default FormM;