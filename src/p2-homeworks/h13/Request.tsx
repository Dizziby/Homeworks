import React, {useState} from 'react';
import {requestsAPI} from "./RequestsAPI";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

const Request = () => {

    const [checkbox, setCheckbox] = useState<boolean>(true)

    const [serverResponse, setServerResponse] = useState<string>("")

    const onClickHandler = () => {
        requestsAPI(checkbox)
            .then(response => {
                console.log(response)
                setServerResponse(response.data.info)
            })
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setServerResponse(error.response.data.info)
            })
    }

    // const onClickHandler = async () => {
    //     try {
    //         const response = await requestsAPI(checkbox)
    //         console.log(response)
    //         console.log(response.data.info)
    //         setServerResponse(response.data.info)
    //     } catch (error: any) {
    //         console.log({...error});
    //         console.log(error.response ? error.response.data.errorText : error.message);
    //         setServerResponse(error.response.data.info)
    //     }
    // }

    return (
        <div>
            <SuperButton onClick={onClickHandler}>Requests</SuperButton>
            <SuperCheckbox onChange={() => setCheckbox(!checkbox)} checked={checkbox} style={{marginLeft: "20px"}}/>
            <div>Server response: {serverResponse}</div>
        </div>
    );
};

export default Request;