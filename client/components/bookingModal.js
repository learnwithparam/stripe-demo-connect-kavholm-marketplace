import React, {Component} from 'react';
import Modal from './modal';
import {Elements, StripeProvider, injectStripe} from 'react-stripe-elements';

class BookingModal extends Component {
  constructor() {
    super();
    this.state = {
      stripe: null,
    };
  }

  componentDidMount() {
    // (componentDidMount only fires in browser/DOM environment)
    this.setState({
      stripe: window.Stripe('pk_live_DoLLbRZ5CwP4ExwB2U1G4oBR006tPvhliP'),
      // TODO Grab this from config somehow.
    });
  }

  render() {
    let {
      isShown,
      toggleModal,
      openVerifyFlow,
      isCompleted,
      handleButtonClick,
    } = this.props;

    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements>
          <Modal
            isShown={isShown}
            toggleModal={handleButtonClick}
            openVerifyFlow={openVerifyFlow}
            isCompleted={isCompleted}
          />
        </Elements>
      </StripeProvider>
    );
  }
}
export default BookingModal;
