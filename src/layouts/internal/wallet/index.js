import {
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    AvatarBadge,
    Text,
    Box
} from '@chakra-ui/react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { Link } from 'react-router-dom';
import { connector } from '../../../config/web3';

const AvatarWallet = ({active}) => {
    const activeColor = active ? 'green' : 'gray'

    return (<Avatar
    size={'sm'}
    src={
        'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    }
    >
        <AvatarBadge boxSize='1.25em' bg={`${activeColor}.500`} />
    </Avatar>)
}

const ButtonConnection = ({active, connect, unsupportedChain}) => {
    if (unsupportedChain) {
        const title = 'Red no soportada'
        const scheme = 'orange'
        return <Button w={'100%'} size={'xs'} onClick={connect} colorScheme={scheme} variant='outline'>{title}</Button>
    }
    const title = active ? 'Desconectar wallet' : 'Conectar wallet'
    const scheme = active ? 'red' : 'green'
    return <Button w={'100%'} size={'xs'} onClick={connect} colorScheme={scheme} variant='outline'>{title}</Button>
}

function Wallet() {
    const {activate, active, account, error, deactivate } = useWeb3React()
    const unsupportedChain = error instanceof UnsupportedChainIdError
    const address = `${account?.substr(0, 6)}...${account?.substr(-4)}`

    const connect = () => {
        activate(connector)
    }

    const disconnect = () => {
        deactivate()
    }

    return (
        <Flex alignItems={'center'}>
            <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <AvatarWallet active={active}/>
            </MenuButton>
            <MenuList>
                {active && (
                    <>
                    <MenuItem as={Box} _hover={{ background: 'transparent' }} closeOnSelect={false} isFocusable={false}>
                        <Text as={'small'} color={'gray.600'}>
                            {address}
                        </Text>
                    </MenuItem>
                    <MenuItem as={Box} _hover={{ background: 'transparent' }} closeOnSelect={false} isFocusable={false}>
                        <Text as={'small'} color={'gray.600'}>
                            Testnet
                        </Text>
                    </MenuItem>
                    {/* <MenuItem as={Box} _hover={{ background: 'transparent' }} closeOnSelect={false} isFocusable={false}>
                        <Text as={'small'} color={'gray.600'}>
                            {web3} ETH
                        </Text>
                    </MenuItem> */}
                    <MenuDivider/>
                    <MenuItem as={Link} to={'/profile'}>Mis bienes</MenuItem>
                    </>
                )}
                
                
                <MenuItem closeOnSelect={false} as={Box} _hover={{ background: 'transparent' }}>
                    { active ?
                        <ButtonConnection connect={disconnect} active={active} unsupportedChain={unsupportedChain}/>
                        : <ButtonConnection connect={connect} active={active} unsupportedChain={unsupportedChain}/>
                    }
                    
                </MenuItem>
            </MenuList>
            </Menu>
        </Flex>
    )
}
export default Wallet