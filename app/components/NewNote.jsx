import styles from './NewNote.css';
import { Form,useActionData, useTransition as useNavigation } from '@remix-run/react';


 function NewNote(){

    const data = useActionData();

    const navigation  = useNavigation();
    const isSubmiting= navigation.state==='submitting' ;
    return(
        <Form method="post" id="note-form">
            {data?.message && <p>{data.message}</p>}
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
            </p>
            <p>
            <label htmlFor="content">Content</label>
            <input type="content" id="title" name="content" rows="5"  required />

            </p>
            <div className="form-actions">
                <button disabled={isSubmiting}>{isSubmiting?'Adding..':'Add note'}</button>
            </div>

        </Form>
    );
}

export default NewNote;

export function links(){
    return [{ rel:'stylesheet', href: styles}];
}