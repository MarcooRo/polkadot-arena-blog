import { Timeline, Tweet } from 'react-twitter-widgets'

export function Twitter() {
   return (
      <Timeline
         dataSource={{
            sourceType: 'profile',
            screenName: 'PolkadotArena',
         }}
         options={{
            height: '1600',
            theme: 'dark',
         }}
      />
   )
}

export function TwitterPolkadot() {
   return (
      <Timeline
         dataSource={{
            sourceType: 'profile',
            screenName: 'Polkadot',
         }}
         options={{
            height: '2500',
            theme: 'dark',
         }}
      />
   )
}
export function TwitterKusama() {
   return (
      <Timeline
         dataSource={{
            sourceType: 'profile',
            screenName: 'kusamanetwork',
         }}
         options={{
            height: '2500',
            theme: 'dark',
         }}
      />
   )
}

export function TWInEvidenza() {
   return (
      <Tweet
         tweetId="1623312277188362242"
         options={{
            theme: 'dark',
            height: '350',
         }}
      />
   )
}
export function SpotlightHome1() {
   return (
      <Tweet
         tweetId="1623312277188362242"
         options={{
            theme: 'dark',
            height: '400',
         }}
      />
   )
}
