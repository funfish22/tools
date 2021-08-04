import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '@reducers';

import { Button } from 'antd';
import firebase from 'firebase';

function AnnouncementF2E() {
    const [announcementLists, setAnnouncementLists] = useState([]);

    const { setH1Title, loginStatus } = useContext(MyContext);

    useEffect(() => {
        setH1Title('前端公告');
        const db = firebase.firestore();

        db.collection('expense')
            .get()
            .then((querySnapshot) => {
                const documents = querySnapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id,
                    };
                });
                setAnnouncementLists(documents);
            })
            .catch();
    }, [loginStatus, setH1Title]);

    return (
        <>
            <ul>{!!announcementLists && announcementLists.map((row) => <li key={row.id}>{row.title}</li>)}</ul>
            <div>{loginStatus && <Button type="primary">新增公告</Button>}</div>
        </>
    );
}

export default AnnouncementF2E;
