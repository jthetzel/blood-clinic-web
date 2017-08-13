import React from 'react'
import styled from 'styled-components'
import {palette} from '../Constants'
import PropTypes from 'prop-types'

const LinksList = styled.ul`
  list-style: none;
  color: white;
`

const NavigateSection = styled.div`
  display: inline-block;
  text-align: center;
  width: 33%;
  height: 50%;
  color: white;
  ${({color}) =>
    `
      background-color: ${palette[color]}
    `
  }
`;

// const SocialSection = styled.div`
//   display: inline-block;
//   text-align: center;
//   width: 50%;
//   height: 60%;
//   color: white;
//   list-style: none;
//   ${({color}) =>
//     `
//       background-color: ${palette[color]}
//     `
//   }
// `;

const LegalSection = styled.div`
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 40%;
  color: white;
  ${({color}) =>
    `
      background-color: ${palette[color]}
    `
  }
`;

// const SocialSection = styled.div``

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <NavigateSection color={this.props.navigationColor}>
          <LinksList>
            <h2>Navigate</h2>
            <li><a href="">Mission & Vision</a></li>
            <li><a href="">Sponsor Us!</a></li>
            <li><a href="">Developers</a></li>
            <li><a href="">Doctors</a></li>
          </LinksList>
        </NavigateSection>
        <NavigateSection color={this.props.navigationColor}>
          <LinksList>
            <h2>Social</h2>
            <li><a href="">Facebook</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Instagram</a></li>
          </LinksList>
        </NavigateSection>
        <NavigateSection color={this.props.legalColor}>
          <LinksList>
            <h2>Legal</h2>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">FAQs</a></li>
          </LinksList>
          <br/>
          <p>&copy; 2017 MetaCircle - All Rights Reserved</p>
        </NavigateSection>

      </div>
    );
  }
}

Footer.propTypes = {
  navigationColor: PropTypes.string,
  legalColor: PropTypes.string
}

Footer.defaultProps = {
  navigationColor: "grey",
  legalColor: "slate"
  // socialLogos
}

export default Footer
