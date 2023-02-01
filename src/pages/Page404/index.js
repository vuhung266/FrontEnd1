import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
    let navigate = useNavigate();
    const gohome = () => {
		return navigate(`/`);
    };
    return (
        <div className='box-flex-center'>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" onClick={gohome}>
                        Back Home
                    </Button>
                }
            />
        </div>
    );
};

export default App;
