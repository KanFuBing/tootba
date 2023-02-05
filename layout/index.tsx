import { Box, CssBaseline } from '@mui/material'
import { ReactNode } from 'react'
import Div100vh from 'react-div-100vh'
import LayoutBar from './bar'
import LayoutHead from './head'

const Layout = ({
    children,
    noPadding,
    title
}: {
    children: ReactNode,
    noPadding?: boolean,
    title: string
}) => {
    return (<>
        <LayoutHead title={title}></LayoutHead>
        <CssBaseline></CssBaseline>
        <LayoutBar></LayoutBar>
        <Div100vh style={{
            background: 'rgba(0, 0, 0, 0) linear-gradient(to right bottom, rgb(252, 165, 165), rgb(125, 211, 252)) repeat scroll 0% 0% / auto padding-box border-box',
            padding: noPadding ? undefined : '20%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        }}>
            <Box id='container' sx={{
                textAlign: 'center',
                width: '100%'
            }}>
                {children}
            </Box>
        </Div100vh>
    </>)
}

export default Layout
