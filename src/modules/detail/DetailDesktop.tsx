import Container from '#/components/Container'
import detail from '#/data/detail'
import React from 'react'

interface Props {
  data: typeof detail
}

export default function DetailDesktop({ data }: Props) {
  const {
    credits,
    image,
    meta,
    overview,
    relatedWorks,
    shareLinks: _shareLinks, // TODO: ini blom dipake
    title,
    titleDesc,
    subtitle,
  } = data

  return <Container>asdfasdf</Container>
}
