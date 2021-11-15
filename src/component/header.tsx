import React, { useEffect } from 'react'
import styled from 'styled-components'
import { getTopBanners } from '../service/recommend'

const Container = styled.div`
    position: relative;
    height: 70px;
    box-sizing: border-box;
    background-color: #242424;
    border-bottom: 1px solid #000;
`

const ContentContainer = styled.div`
    width: 1100px;
    margin: 0 auto;
`

export default function Header() {

    useEffect(() => {
        getTopBanners();
    }, [])

    return (
        <Container>
            <ContentContainer>

            </ContentContainer>
        </Container>
    )
}
