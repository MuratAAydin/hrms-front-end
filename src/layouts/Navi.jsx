import React, {Component} from 'react'
import {Button, Dropdown, Menu} from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
	 render() {
			return (
					<Menu size='small' fixed='top' inverted>
						 <Menu.Item style={{border: 'none'}} name='Home'/>
						 <Menu.Menu position='right'>
								<Dropdown item text='Language'>
									 <Dropdown.Menu color='primary'>
											<Dropdown.Item>English</Dropdown.Item>
											<Dropdown.Item>Türkçe</Dropdown.Item>
									 </Dropdown.Menu>
								</Dropdown>
								<Menu.Item>
									 <Button.Group style={{}}>
											<Button style={{background: '#FFC312', borderRadius: '28px 0 0 28px'}}
															content='Sign Up'/>
											<Button style={{background: '#ED4C67', borderRadius: '0 28px 28px 0'}}
															content='Sign In'/>
									 </Button.Group>
								</Menu.Item>
						 </Menu.Menu>
					</Menu>
			)
	 }
}
