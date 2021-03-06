import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabBar, Icon } from 'antd-mobile';
import TabHome from './TabHome';
import TabIcon from './TabIcon';
import TabTrick from './TabTrick';
import { setNav } from '../../store/actions/global/nav';
import './tabs.scss';

function tabIcon(url) {
  return (
    <div
      style={{
        width: '.22rem',
        height: '.22rem',
        background: `url(${url}) center center /  .21rem .21rem no-repeat`
      }}
    />
  );
}

const tabBarData = [
  {
    title: 'Home',
    icon: tabIcon('/static/icons/home.svg'),
    selectedIcon: tabIcon('/static/icons/home-selected.svg'),
    link: '/home',
    component: TabHome
  },
  {
    title: 'Icon',
    icon: <Icon type="check-circle-o" />,
    selectedIcon: <Icon type="check-circle" />,
    link: '/icon',
    component: TabIcon
  },
  {
    title: 'Trick',
    icon: <Icon type="cross-circle-o" />,
    selectedIcon: <Icon type="cross-circle" />,
    link: '/trick',
    component: TabTrick
  }
];

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: '/home' };
  }

  render() {
    return (
      <div className="main-tabs">
        <TabBar>
          {tabBarData.map(({ title, icon, selectedIcon, link, component }) => {
            const Com = component;

            return (
              <TabBar.Item
                key={link}
                title={title}
                icon={icon}
                selectedIcon={selectedIcon}
                selected={this.state.selectedTab === link}
                onPress={() => {
                  this.props.dispatch(setNav({ navTitle: title, isHome: true }));
                  this.setState({
                    selectedTab: link
                  });
                }}
              >
                <Com />
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
}

export default connect()(Tabs);
