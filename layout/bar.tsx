import { AppBar, Toolbar, Typography, Box, IconButton, useTheme } from '@mui/material'
import GithubIcon from '@mui/icons-material/GitHub'
import Image from 'next/image'
import Link from 'next/link'

const LayoutBar = () => {
    const mode = useTheme().palette.mode
    return (
        <AppBar color='transparent' position='fixed' sx={{
            top: 0,
            background: mode === 'dark' ?
                'rgba(0, 0, 0, 0) linear-gradient(to right, rgba(150, 121, 139, 0.9), rgba(100, 149, 125, 0.4)) repeat scroll 0% 0% / auto padding-box border-box' :
                'rgba(0, 0, 0, 0) linear-gradient(to right, rgba(251, 207, 232, 0.9), rgba(167, 243, 208, 0.4)) repeat scroll 0% 0% / auto padding-box border-box'
        }}>
            <Toolbar>
                <Link href='/'>
                    <Typography sx={{ mr: 1, fontWeight: 'bolder' }} variant='h5' color={mode === 'dark' ? 'rgb(170,255,94)' : 'rgb(85,139,47)'}>
                        トゥート葉
                    </Typography>
                </Link>
                {mode === 'dark' ? <></> : <Image src='/android-chrome-192x192.png' width={32} height={32} alt='Tootba Logo'></Image>}
                <Box sx={{ flexGrow: 1 }} />
                <IconButton target='_blank' rel='noreferrer' href='https://github.com/kanfubing/tootba'>
                    <GithubIcon></GithubIcon>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default LayoutBar
