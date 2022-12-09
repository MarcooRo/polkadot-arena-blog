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

export function TwitterWM() {
   return (
      <Timeline
         dataSource={{
            sourceType: 'profile',
            screenName: 'thatMediaWag',
         }}
         options={{
            height: '1200',
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
         tweetId="1587383243610914816"
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
         tweetId="1597594751066591237"
         options={{
            theme: 'dark',
            height: '400',
         }}
      />
   )
}
