import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";
import './Sidebar.css';

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
  >
    <div className="white-text SidebarContent">
      my own content here
    </div>
      <Menu.Item as='a'>
        <Icon name='search' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
  </Sidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

export default class SidebarExampleTransitions extends Component {
  state = {
    animation: "overlay",
    direction: "left",
    dimmed: false,
    visible: false
  };

  handleAnimationChange = animation => () =>
    this.setState(prevState => ({ animation, visible: !prevState.visible }));

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked });

  handleDirectionChange = direction => () =>
    this.setState({ direction, visible: false });

render() {
  const { visible, dimmed } = this.state;

  return (
    <div className="Sidebar">
      <Button onClick={this.handleAnimationChange("overlay")}>Overlay</Button>

      <Sidebar.Pushable as={Segment}>
        <VerticalSidebar
          animation="overlay"
          direction="bottom"
          visible={visible}
        />

        <Sidebar.Pusher dimmed={dimmed && visible}>
          <Segment basic>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.comhttps://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
}