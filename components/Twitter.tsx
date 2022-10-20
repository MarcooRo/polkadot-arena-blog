import { border } from '@chakra-ui/react'
import { Timeline } from 'react-twitter-widgets'

export function Twitter(){
    return(
        <Timeline
        dataSource={{
            sourceType: 'profile',
            screenName: 'PolkadotArena'
        }}
        options={{
            height: '1550',
            theme: 'dark',        
        }}
    />
    )
}

export function TwitterWM(){
    return(
        <Timeline
        dataSource={{
            sourceType: 'profile',
            screenName: 'thatMediaWag'
        }}
        options={{
            height: '1100',
            theme: 'dark',        
        }}
    />
    )
}