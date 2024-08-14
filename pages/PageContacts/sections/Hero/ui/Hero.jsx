import cx from 'classnames';
import styles from './Hero.module.scss'
import { Subtitle } from '../../../../../src/shared/ui/subtitle/'


export const Hero = () => {
  return (
    <section class={cx(styles.hero)}>
      <div class={cx(styles.container, '__container')}>
        <div class={cx(styles.inner)}>
          <Subtitle text='Contact us' />
          <div class={cx(styles.body)}>
            <h3 class={cx(styles.title, 'h1')}>We'd love to hear from you</h3>
            <div class={cx(styles.description)}>
              <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
            </div>
          </div>
        </div>
        <div class={cx(styles.contacts)}>
          <address>
            <div class={cx(styles.addressItem)}>
              <h4 class={cx(styles.addressTitle, styles.addressTitleBig)}>Let's talk! </h4>
              <a href="tel:+123456789">+1 23 456 789</a>
              <a href="mailto:hello@finsweet.com" target="_blank">hello@finsweet.com</a>
            </div>
            <div class={cx(styles.addressItem)}>
              <h4 class={cx(styles.addressTitle)}>Headoffice</h4>
              <a href="https://www.google.com/maps?q=8+Brewery+Drive,+Hudson,+NH+03051, USA" target="_blank">
                8 Brewery Drive, Hudson, NH 03051 <br /> USA
              </a>
            </div>
            <div class={cx(styles.addressItem)}>
              <h4 class={cx(styles.addressTitle)}>Branch Office</h4>
              <a href="https://www.google.com/maps?q=178+Marconi+St., Venice, 34293, Italy" target="_blank">
                178 Marconi St., Venice, 34293 <br /> Italy
              </a>
            </div>
          </address>
          <ul class={cx(styles.socials)}>
            <li>
              <a href="#!">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4512 10C20.4512 4.47715 15.974 0 10.4512 0C4.92832 0 0.451172 4.47715 0.451172 10C0.451172 14.9912 4.10801 19.1283 8.88867 19.8785V12.8906H6.34961V10H8.88867V7.79688C8.88867 5.29063 10.3816 3.90625 12.6658 3.90625C13.7596 3.90625 14.9043 4.10156 14.9043 4.10156V6.5625H13.6434C12.4012 6.5625 12.0137 7.3334 12.0137 8.125V10H14.7871L14.3437 12.8906H12.0137V19.8785C16.7943 19.1283 20.4512 14.9912 20.4512 10Z" fill="#1D2130" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#!">
                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.74297 17.1251C14.2883 17.1251 18.4164 10.8724 18.4164 5.45167C18.4164 5.27589 18.4125 5.0962 18.4047 4.92042C19.2077 4.33967 19.9007 3.62033 20.4512 2.7962C19.7033 3.12896 18.9092 3.34627 18.0961 3.44074C18.9522 2.92755 19.5933 2.12135 19.9004 1.17159C19.095 1.64892 18.2142 1.98563 17.2957 2.1673C16.6769 1.50976 15.8587 1.07439 14.9676 0.928498C14.0765 0.78261 13.1622 0.934331 12.366 1.3602C11.5697 1.78607 10.936 2.46238 10.5627 3.28455C10.1894 4.10672 10.0974 5.02897 10.3008 5.9087C8.66992 5.82686 7.07445 5.40321 5.61782 4.6652C4.16119 3.9272 2.87592 2.89132 1.84531 1.62472C1.3215 2.52782 1.16122 3.59649 1.39703 4.61353C1.63284 5.63057 2.24706 6.51966 3.11484 7.10011C2.46336 7.07943 1.82615 6.90402 1.25586 6.58839V6.63917C1.25528 7.58691 1.58292 8.50561 2.1831 9.2391C2.78327 9.97258 3.61894 10.4756 4.54805 10.6626C3.94455 10.8277 3.31116 10.8518 2.69687 10.7329C2.95905 11.548 3.46915 12.2609 4.15598 12.7721C4.84281 13.2833 5.67211 13.5673 6.52813 13.5845C5.07486 14.726 3.27965 15.3452 1.43164 15.3423C1.10391 15.3418 0.776504 15.3217 0.451172 15.2821C2.32855 16.4866 4.51245 17.1263 6.74297 17.1251Z" fill="#1D2130" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#!">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.9707 0H1.92773C1.11133 0 0.451172 0.644531 0.451172 1.44141V18.5547C0.451172 19.3516 1.11133 20 1.92773 20H18.9707C19.7871 20 20.4512 19.3516 20.4512 18.5586V1.44141C20.4512 0.644531 19.7871 0 18.9707 0ZM6.38477 17.043H3.41602V7.49609H6.38477V17.043ZM4.90039 6.19531C3.94727 6.19531 3.17773 5.42578 3.17773 4.47656C3.17773 3.52734 3.94727 2.75781 4.90039 2.75781C5.84961 2.75781 6.61914 3.52734 6.61914 4.47656C6.61914 5.42188 5.84961 6.19531 4.90039 6.19531ZM17.4941 17.043H14.5293V12.4023C14.5293 11.2969 14.5098 9.87109 12.9863 9.87109C11.4434 9.87109 11.209 11.0781 11.209 12.3242V17.043H8.24805V7.49609H11.0918V8.80078H11.1309C11.5254 8.05078 12.4941 7.25781 13.9355 7.25781C16.9395 7.25781 17.4941 9.23438 17.4941 11.8047V17.043Z" fill="#1D2130" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}