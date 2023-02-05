import Layout from '@/layout'
import { InputLabel, Input, InputAdornment, Button } from '@mui/material'
import StorageIcon from '@mui/icons-material/Storage'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { ChangeEventHandler, useState } from 'react'
import Link from 'next/link'

const Home = () => {
  const [params, setParams] = useState({ instance: '', username: '' })
  const handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
    setParams(params => ({ ...params, [event.target.id]: event.target.value }))
  }

  return (
    <Layout title='ホーム'>
      <InputLabel htmlFor='instance'>
        インスタンス
      </InputLabel>
      <Input
        id='instance'
        placeholder='mastodon.example'
        value={params.instance}
        fullWidth
        startAdornment={
          <InputAdornment position='start'>
            <StorageIcon />
          </InputAdornment>
        }
        onChange={handleChange}
      />

      <br></br><br></br>
      <InputLabel htmlFor='username'>
        ユーザー名
      </InputLabel>
      <Input
        id='username'
        placeholder='yourusername'
        value={params.username}
        fullWidth
        startAdornment={
          <InputAdornment position='start'>
            <AccountCircleIcon />
          </InputAdornment>
        }
        onChange={handleChange}
      />

      <br></br><br></br>
      <Button variant='outlined' LinkComponent={Link} href={`/generate?instance=${params.instance}&username=${params.username}`}>Word Cloud を生成する</Button>
    </Layout>
  )
}

export default Home
