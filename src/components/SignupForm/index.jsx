import {useForm} from 'react-hook-form';

const SignupForm = () =>{
    const {register, handleSubmit, reset, formState:{errors}} = useForm();

    function handleClickClear (event){
        reset();
    }
    
    const handleSubmitForm = (data) =>{
        console.log(data);
    }

    console.log(errors);
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label htmlFor="">
                Name
                <input  {...register('name', {required: true})} />
            </label>
            <br /><br />
            <label htmlFor="">
                Age
                <input {...register('age', {required: true})}  type="text" />
            </label>
            <br /> <br />
            <label htmlFor="">
                Address
                <input {...register('address', {required: true})}  type="text"/>
            </label>
            <br /> <br />
            <label htmlFor="">
                Zipcode
                <input {...register('zipcode', {required: true})}  type="text" />
            </label>
            <br /> <br />
            <label htmlFor="">
                Phone
                <input {...register('phone', {required: true})}  type="text" />
            </label>
            <br /> <br />
            <div>
                <button type="button" onClick={handleClickClear}>Clear</button>
                <br />
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default SignupForm;