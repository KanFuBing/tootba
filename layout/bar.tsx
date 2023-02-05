import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material'
import GithubIcon from '@mui/icons-material/GitHub'
import Image from 'next/image'
import Link from 'next/link'

const LayoutBar = () => {
    return (
        <AppBar color='transparent' position='fixed' sx={{
            top: 0,
            background: 'rgba(0, 0, 0, 0) linear-gradient(to right, rgba(251, 207, 232, 0.9), rgba(167, 243, 208, 0.4)) repeat scroll 0% 0% / auto padding-box border-box'
        }}>
            <Toolbar>
                <Link href='/'>
                    <Typography sx={{ mr: 1, fontWeight: 'bolder' }} variant='h5' color='#558b2f'>
                        トゥート葉
                    </Typography>
                </Link>
                <Image src='/android-chrome-192x192.png' width={32} height={32} alt='Tootba Logo'></Image>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton target='_blank' rel='noreferrer' href='https://github.com/chuangwaiproj/tootba'>
                    <GithubIcon></GithubIcon>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default LayoutBar
