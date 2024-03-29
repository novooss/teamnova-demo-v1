import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ChipArray from '../../generic/ChipArray'

const TeamCard = ({ team }) => {
  const assetsPath = require.context('../../../assets/images', false)

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4 }}
      >
        <CardHeader
          disableTypography
          avatar={
            <Avatar
              src={team.owner.profile.avatarUrl}
            />
          }
          title={
            <Stack
              direction='column'
            >
              <Typography variant='subtitle1'>
                {team.owner.profile.name}
              </Typography>
              <Typography variant='subtitle2' color='text.secondary'>
                Product Owner
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {team.owner.profile.location.toUpperCase()}({team.owner.profile.timezone})
              </Typography>
            </Stack>
          }
        />
        <CardMedia
          component='div'
          sx={{
            // 16:9
            pt: '56.25%'
          }}
          image={assetsPath(team.imageUrl)}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Stack
            direction='column'
            justifyContent='space-evenly'
          >
            <Stack
              direction='row'
              justifyContent='space-between'
            >
              <Typography gutterBottom variant='h5' component='h2'>
                {team.name}
              </Typography>
            </Stack>
            <Typography variant='subtitle2' color='text.secondary'>
                {team.tagline.toUpperCase()}
            </Typography>
            <ChipArray labels={team.topics} size='small' color='primary' variant='outlined'/>
            <Stack
              direction='row'
              spacing={2}
            >
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{team.openRolesCount}</Box> open roles
              </Typography>
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{team.followersCount}</Box> followers
              </Typography>
              <Typography variant='subtitle2' color='text.secondary' component='div'>
                <Box color='text.primary' display='inline'>{team.supportersCount}</Box> supporters
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Button component={RouterLink} to={`/teams/${team.key}`} target='_blank' style={{ textTransform: 'none', fontWeight: 'bold', lineHeight: '32px', borderRadius: 32 }} variant='contained'>Meet the Team</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default TeamCard
