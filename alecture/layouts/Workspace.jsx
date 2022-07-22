import React from 'react';
import axios from 'axios';
import useSWR from 'swr';

const Workspace = () => {

    const {data, error, revalidate} = useSWR('http//localhost:3095/api/users', fetcher);

    const onLogout = useCallback(() => {
        axios.post('http://localhost:0295/api/users/logout', null, {
            withCredentials: true
        })
        .then(() => {
            revalidate();
        })
    }, []);

    if(!data){
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <button onClick={onLogout}>로그아웃</button>
            {children}
        </div>
    )
}

export default Workspace;