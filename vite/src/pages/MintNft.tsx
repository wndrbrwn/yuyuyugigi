import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

import { OutletContext } from "../components/Layout";
import MintModal from "../components/MintModal";

const MintNft: FC = () => {
  const [nftMetadata, setNftMetadata] = useState<NftMetadata>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { mintContract, signer } = useOutletContext<OutletContext>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickMint = async () => {
    try {
      setIsLoading(true);

      const response = await mintContract?.mintNft();

      await response.wait();

      const totalSupply = await mintContract?.totalSupply();

      const tokenURI = await mintContract?.tokenURI(totalSupply);

      const axiosResponse = await axios.get<NftMetadata>(tokenURI);

      setNftMetadata(axiosResponse.data);

      onOpen();

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      setIsLoading(false);
    }
  };

  useEffect(() => console.log(signer), [signer]);

  return (
    <>
    <Flex
        flexDir="column"
        w="100%"
        mb={[10, 10, 20]}
        justifyContent="center"
        alignItems="center"
        
      >
        
       <Flex
       
       gap={[2, 2, 1]}
       color="gray"
       h={[20, 20, 500]}
      
       
       fontSize={[2, 2, 17]}>
           ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⡟⠒⠒⠲⢦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⠀⠀⣄⡀⠀⠈⠉⠓⠶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⢻⣿⣷⣤⣷⣦⣀⠀⠉⠳⣦⡀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠶⢶⡶⠟⠟⢻⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀⠈⣿⣿⣿⣿⣿⣿⣷⣤⡀⠈⠙⢶⡀⢀⣀⡤⠞⠛⢁⣀⣤⣴⡿⠃⠀⢠⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣀⣀⣀⠀⠀⠀⠀⢠⣶⣶⡀⠀⠀⠸⡇⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠙⠛⢁⣠⣴⣾⣿⣿⣿⣿⣾⠁⢀⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣴⡏⠉⠹⣧⠀⠀⠀⠘⠛⠛⠃⠀⠀⠀⢻⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠙⢧⣄⣼⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣿⠋⢸⣿⣿⠃⠀⣰⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⡤⠤⠴⠾⠃⠀⣨⣿⡏⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⣿⠀⢸⣿⡟⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣀⣤⠴⠛⠋⠁⠀⠀⠀⠀⠀⣀⣀⣿⠀⢻⡀⠀⠈⠛⢿⣿⣿⣿⣿⢹⠆⠀⣿⠀⢸⣿⣇⣀⡾⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢠⣴⠞⠋⠀⣀⣀⣤⣤⣴⣶⣶⣿⣿⣿⣿⣿⡄⠈⣧⠀⠀⢶⣤⣝⣿⠃⢸⢸⠀⠀⢿⡀⠘⠛⠉⠁⠀⣀⣀⣉⣳⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠻⢧⣤⠀⠘⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⢷⣀⣽⠆⠀⠀⣿⠛⠛⣻⠈⢿⡇⠀⠈⠛⠲⢤⣤⣶⣯⣉⠛⠓⢦⣍⡉⠛⠒⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠙⠳⣤⡈⠻⢿⣿⣿⣿⣿⣿⣿⠇⣤⠞⠉⠀⠀⠀⢀⣸⡇⠀⢸⠀⣾⣶⣿⣷⠦⣄⠀⠙⢿⣿⣿⣷⣶⣄⡈⠙⣶⣄⠀⠀⠀⠀⠀⠀⠀
⢰⣟⣿⠆⠀⠀⠀⠀⠙⢦⣀⠙⠿⣿⣿⣿⣿⠀⣿⠀⠀⣠⣴⡿⠿⢿⡳⠟⢿⣾⣿⠋⠀⠘⣧⠈⣿⣦⣀⠙⢿⣿⡿⣟⣥⠞⠛⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠘⣷⡤⠉⣻⡟⣻⠀⠹⡄⠀⢹⡟⠀⠀⠀⢻⡆⠘⠇⣿⠀⠀⠀⠈⡇⣿⠛⣿⣷⣦⣽⣿⡋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠊⠁⣠⣴⠋⣠⣿⠀⢸⣧⠀⢸⠀⠀⠀⠀⡤⣷⠀⠀⢿⠷⠀⠀⠀⡇⣿⠀⣿⡿⠋⠉⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣤⠞⢉⣤⣶⣿⣿⣧⣾⣿⣿⠀⣿⢸⡀⢿⠀⠀⠀⠀⣁⣤⡴⠺⣶⠖⠲⢦⡴⠗⣿⢀⡟⠀⠀⠀⠀⠀⠈⠻⠄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠿⠷⢤⣬⣉⣉⣿⡿⠿⢿⣿⣿⢠⣿⠈⣇⢛⠻⠶⢒⠋⠉⢀⣀⣠⡿⠶⢾⣿⣶⡆⣿⣯⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠋⠛⠳⠶⠦⣿⣼⣿⣿⣿⣸⢀⡞⠛⠛⠉⠉⠀⠀⠀⠀⠀⠘⢿⣾⡿⣋⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣯⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣋⡈⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⢿⡄⠀⠀⣽⡟⢿⣿⣲⣤⣤⣤⣤⣤⣴⡟⠛⢿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣾⣷⡶⠾⠟⠂⠀⠈⣿⣿⣟⢠⣥⣾⣿⡇⠀⣾⡿⣿⠶⢶⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡏⠀⠀⠀⠈⠀⠀⠀⠀⠘⣿⣿⣿⡸⠿⠿⣿⣿⣤⣿⣉⡀⠀⠀⢻⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡇⡀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⢻⣿⠏⠀⠀⢿⡀⠈⠙⣿⡀⠀⠀⠻⢦⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⠾⠿⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣧⠀⣠⠼⠓⢦⣄⣿⣧⡤⠀⠀⠀⢻⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⠆⠀⠈⢹⡟⠀⣹⡿⠛⠋⠉⠉⠻⢻⣦⠀⠁⠠⣟⣻⣦⣄⣀⣀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⣴⡿⠃⠀⠀⠘⢸⡇⠿⠵⣶⠞⠉⣱⠀⠀⠀⠙⢿⣶⣶⣿⣿⣿⣿⣿⣿⣿⣦⣀⡀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣅⣀⣴⠿⠛⠷⢶⣤⣤⣶⠾⢿⡿⠀⠀⠀⠀⢸⣧⠀⣼⢁⣠⠞⢁⡀⢀⠀⠀⠈⠛⣿⣿⢻⣿⡛⣿⠀⢀⠈⠙⢿⡄⠀
⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⠏⢀⣦⣤⣀⡈⠙⣳⣤⡾⠃⠀⠀⠀⢠⠈⣿⣰⣧⡾⡏⣼⡾⢀⣾⡀⠀⠀⠀⣿⣿⡘⠛⢃⣿⠇⠀⠀⠀⢸⣷⠀
⠀⠀⠀⢀⣴⣿⣯⣿⠛⣿⠿⣿⡏⠀⢀⡍⠛⠫⣍⠽⣿⠋⡄⠀⠀⠀⠀⠀⡀⣽⣿⣯⠼⣷⢻⣅⣾⡏⠿⣦⣤⣴⣿⢹⣿⣿⣿⡇⠀⠀⢀⣠⣼⡿⠃
⠀⠀⠀⠾⣿⣟⠃⣿⡘⠛⢠⣿⣇⠀⠀⠙⠶⣤⡙⢦⣿⡀⠀⡀⠀⠀⢀⣴⢿⡟⠛⠛⠲⠾⠶⠿⠿⢷⣶⣿⣿⣿⣧⣼⣿⡿⠿⠷⠛⠛⠛⠉⠁⠀⠀
⠀⠀⠀⠀⠸⣿⣇⠹⣿⣿⣿⡋⣿⣄⠐⠦⣄⣈⣙⣻⣿⡇⠠⠀⠀⢀⣾⠋⠀⢷⠀⠀⢠⡶⠒⣦⠀⢀⣼⢿⣿⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠻⠶⠿⢿⣿⡷⢾⣿⠟⠛⠒⠞⠀⣸⡟⠀⠀⠀⠀⠸⣧⡀⠀⠈⣇⠀⠋⠀⠓⡈⠀⣾⠟⠣⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠻⠷⠶⠶⠤⢨⣿⡦⣄⢘⣇⠈⢛⠛⢃⣼⡟⠀⣠⢽⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</Flex>
        

        <Text fontSize={[24, 24, 36]} fontWeight="semibold" mb={8}  >
        ✡ Exodia is Sealed! ✡
        </Text>
        {!signer && <Text>🦊 메타마스크 로그인이 필요합니다!</Text>}
        <Button
          onClick={onClickMint}
          isDisabled={!signer}
          isLoading={isLoading}
          loadingText="로딩중"
        >
          민팅하기
        </Button>
      </Flex>
      <MintModal isOpen={isOpen} onClose={onClose} nftMetadata={nftMetadata} />
    </>
  );
};

export default MintNft;