import React from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import {Drawer, Button} from 'rsuite'


export default function App() {

    const drawerList = [{ico: <i className="far fa-eye"/>, name: 'Opportunity Visibility'}, {
        ico: <i className="fas fa-info"/>,
        name: 'Basic Details'
    }, {
        ico: <i className="fas fa-check"/>, name: '\n' +
            'Registration & Eligibility'
    },
        {
            ico: <i className="fab fa-wpforms"/>, name: '\n' +
                'Registration Form'
        },
        {ico: <i className="fas fa-money-check"/>, name: 'Payments'}, {
            ico: <i className="fas fa-network-wired"/>, name: '\n' +
                'Rounds'
        },]


    // Drawer state
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

    // Function to close drawer
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }

    // Function to toggle Drawer
    const toggleDrawer = () => {
        setIsDrawerOpen(true);
    }

    return (
        <div style={{
            display: 'block', width: 500, paddingLeft: 30
        }}>
            <div>
                <Button onClick={toggleDrawer} className={'text-dark bg-transparent'}>
                    <i className="fas fa-hamburger"/>
                </Button>
                <Drawer
                    size='xs'
                    show={isDrawerOpen}
                    onHide={closeDrawer}
                    autoFocus={true}
                >
                    <Drawer.Header>
                        {/*<Drawer.Title>Sample Title for Drawer</Drawer.Title>*/}
                    </Drawer.Header>
                    <Drawer.Body className={'d-flex flex-column'}>
                        {drawerList.map((s) => {
                            return <div className="p-2 d-flex justify-content-between">
                                {s.ico} {s.name}
                            </div>
                        })}
                    </Drawer.Body>
                    <Drawer.Footer>
                        {/*<Button onClick={closeDrawer} appearance="primary">*/}
                        {/*    Confirm*/}
                        {/*</Button>*/}
                        {/*<Button onClick={closeDrawer} appearance="subtle">*/}
                        {/*    Cancel*/}
                        {/*</Button>*/}
                    </Drawer.Footer>
                </Drawer>
            </div>
        </div>
    );
}