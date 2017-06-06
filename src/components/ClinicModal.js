import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class ClinicModal extends React.Component {
  render () {
    const { open, onRequestClose } = this.props
    const actions = [
      <FlatButton
        label='Cancel'
        primary
        onTouchTap={onRequestClose}
      />,
      <FlatButton
        label='Submit'
        primary
        keyboardFocused
        onTouchTap={onRequestClose}
      />,
    ];

    return (
      <Dialog
        title='Dialog With Actions'
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={onRequestClose}
      >
        The actions in this window were passed in as an array of React objects.
      </Dialog>
    )
  }
}

export default ClinicModal
