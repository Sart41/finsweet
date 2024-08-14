import cx from 'classnames';
import styles from './JoinForm.module.scss'
import { Button } from './../../../shared/ui/buttons/Button/';
import { FormItem } from './../../../shared/ui/FormItem/';


const Input = (props) => {
  return (
    <input class={cx(styles.input)} {...props} />
  )
}

const Textarea = (props) => {
  return (
    <textarea class={cx(styles.textarea)} {...props} />
  )
}


export const JoinForm = () => {
  return (
    <section class={cx(styles.contactsForm)}>
      <div class='__container'>
        <form class={cx(styles.form)} action="#">

          <FormItem label='First Name' id='first-name'>
            <Input type="text" name="first-name" id="first-name" placeholder='Joe' autocomplete="on" required />
          </FormItem>

          <FormItem label='Last Name' id='last-name'>
            <Input type="text" name="last-name" id="last-name" placeholder='Doe' autocomplete="on" required />
          </FormItem>

          <FormItem label='Email Id' id='email'>
            <Input type="email" name="email" id="email" placeholder='example@google.com' autocomplete="on"
              pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
              required />
          </FormItem>

          <FormItem label='Subject' id='subject'>
            <Input type="text" name="subject" id="subject" placeholder='Example' autocomplete="on" required />
          </FormItem>

          <FormItem label='Message' id='message'>
            <Textarea name="message" id="message" rows="5" placeholder='Type your Message' autocomplete="on" required />
          </FormItem>

          <Button
            text='Send message'
            mode='primary'
            type='submit'
          />
        </form>
      </div>
    </section>
  )
}