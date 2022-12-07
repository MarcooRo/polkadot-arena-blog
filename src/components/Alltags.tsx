import { Heading, Tag } from "@chakra-ui/react"
import Link from "next/link"

const parachainListP = ['Astar', 'Acala', 'MoonRiver', 'MoonBeam', 'Bifrost Polkadot', 'Centrifuge',
'Parallel Finance', 'Phala Network']

export function ParachainPolkadot() {
    return (
        <div>
            <Heading as='h2' fontSize='l' pb={6}>Scopri le parachain di Polkadot</Heading>
            {parachainListP.map((parachain) => (
                <Link href={`/categoria/${parachain}`} key={parachain}>
                    <a><Tag size='md' m={1} key={parachain} variant='solid' colorScheme='teal'>
                        {parachain}
                    </Tag></a>
                </Link>
            ))}
        </div>
    )
}

const parachainListK = [
    'Karura', 'Moonriver', 'Subsocial', 'Zeitgeist', 'Bit.Country Pioneer', 'Calamari Network']

export function ParachainKusama() {
    return (
        <div>
            <Heading as='h2' fontSize='l' pb={6}>Scopri le parachain di Kusama</Heading>
            {parachainListK.map((parachain) => (
                <Link href={`/categoria/${parachain}`} key={parachain}>
                    <a><Tag size='md' m={1} key={parachain} variant='solid' colorScheme='teal'>
                        {parachain}
                    </Tag></a>
                </Link>
            ))}
        </div>
    )
}

const projects = ['Acala', 'Karura', 'Bifrost', 'Subsocial', 'KodaDot', 'Equilibrium', 'sora',
'Bifrost', 'Mangata X', 'Zeitgeist', 'Moonbeam', 'Moonriver', 'RMRK', 'rmrk', 'Unique Network', 'Neon Crisis', 'donkeygang']

export function Projects() {
    return (
        <div>
            <Heading as='h2' fontSize='l' pb={6}>Scopri i progetti del mondo Dotsama</Heading>
            {projects.map((project) => (
                <Link href={`/categoria/${project}`} key={project}>
                    <a><Tag size='md' m={1} key={project} variant='solid' colorScheme='teal'>
                        {project}
                    </Tag></a>
                </Link>
            ))}
        </div>
    )
}

const collectionsTag = ['XCVM', 'DeFi', 'Parachain', 'NFT', 'Cross-chain', 'Consenso', 'Staking', 'Dotsama', 'Substrate', 'Liquid Staking', 'Governance', 'DEX', 'Parachain', 'Parity'] 

export function CollectionsTag() {
    return (
        <div>
            <Heading as='h2' fontSize='l' pb={6}>Raccolte di articoli</Heading>
            {collectionsTag.map((tag) => (
                <Link href={`/categoria/${tag}`} key={tag}>
                    <a>
                    <Tag size='md' m={1} key={tag} variant='solid' colorScheme='teal'>
                        {tag}
                    </Tag>
                    </a>
                </Link>
            ))}
        </div>
    )
}