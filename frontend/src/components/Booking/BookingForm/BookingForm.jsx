import React, { useContext } from 'react'
import BookingFormStyle from './BookingForm.module.css';
import useInput from '../../../Hooks/Input/useInput';
import axios from 'axios' ;
import Auth from '../../../store/ContextAuth/Auth';
import CartContext from '../../../store/CartContext/CartContext';

const BookingForm = () => {


  const ctx = useContext(Auth);
  const ctxCart = useContext(CartContext)

  const { input: name, invalid : invalidName, InputHandler : NameHandler ,Valid : ValidName,blurHandler : BlurName,ResetHandler : ResetName } =useInput(name => name.trim().length > 7)

  const { input: email, invalid : emailInvalid ,Valid : ValidEmail, InputHandler : emailHandler ,blurHandler : emailBlur ,ResetHandler : emailReset } =useInput(email => email.includes('@'))


  const { input: phone, invalid : invalidPhone,Valid : ValidPhone, InputHandler : PhoneHandler ,blurHandler : BlurPhone ,ResetHandler : ResetPhone } =useInput((phone) => phone.trim().length > 6 )

  const { input: ticketNumer, invalid : invalidticketNumer, Valid : ValidticketNumer, InputHandler : TicketHandler ,blurHandler : BlurticketNumer ,ResetHandler : ResetticketNumer } =useInput(Validate => Validate.trim().length > 0)


  // const HandleNewUser = (NewUser) => {
  //       axios.post('http://localhost:9007/user',NewUser)
  // } 


  console.log(invalidName);
  
   
  const submitValid = ValidName && ValidEmail && ValidPhone && ValidticketNumer


  const OnSubmit = (e) => {
      e.preventDefault();

      

      const NewUser = {
        name,
        phone,
        email,
        ticket: ticketNumer,
        location : ctx.CurrentBooking.Country
      }

      console.log(NewUser.Country);
      
      ctxCart.CartChangeHandler({name : name, phone: phone, email : email,ticket: ticketNumer,  location: ctx.CurrentBooking.Country, image:ctx.CurrentBooking.image , price :ctx.CurrentBooking.Price })

      // HandleNewUser(NewUser)
      // alert("Sucess UserBooking")

      ctx.PeopleChangeHandler()
           
      
      ResetName();
      emailReset();
      ResetticketNumer();
      ResetPhone();
      
    
  }

  // 

  return (
    <>
        <div className={BookingFormStyle.Container}>
            <div className={BookingFormStyle.FormHeader}>
              <h1>Book This Tour</h1>
              <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
            </div>
            <form onSubmit={OnSubmit}>
              <input className={invalidName && BookingFormStyle.invalid} value={name} type="text"  placeholder= 'name' onChange={NameHandler} onBlur={BlurName} />
              <input value={email} className={emailInvalid && BookingFormStyle.invalid} type="email" placeholder= 'email' onChange={emailHandler} onBlur={emailBlur} />
              <input type="email" placeholder= 'Confirm email' />
              <input value={phone} className={invalidPhone && BookingFormStyle.invalid} type="number" placeholder= 'Phone' onChange={PhoneHandler} onBlur={BlurPhone}/>
              <input type="date" placeholder= 'dd-mm-yy' />
              <input value={ticketNumer} className={invalidticketNumer && BookingFormStyle.invalid} type="number" placeholder= 'number of ticket ' onChange={TicketHandler} onBlur={BlurticketNumer}/>
              <input type="text" placeholder= 'message' />

              <button  >Check Availability</button>
              <button disabled={!submitValid} type='submit'>Book Now</button>
            </form>
        </div>
    </>
  )
}

export default BookingForm