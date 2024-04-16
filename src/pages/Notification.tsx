import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Image,
  List,
  ListItem,
  Stack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import TextComponent from "../components/TextComponent";
import ProfileLayout from "../layouts/ProfileLayout";
import colors from "../components/colors";
import { FiMoreVertical } from "react-icons/fi";
import PopoverComponent from "../components/Popover";

export default function Notification() {
  let data = [
    {
      title: "Check ads similar to your favorite!",
      images: [
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      ],
      period: "yesterday, 20:05",
    },
    {
      title: "Check ads similar to your favorite!",
      images: [
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ4AZQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYHAf/EAD0QAAIBAwMCAwUHAgUCBwAAAAECAwAEEQUSITFBBhNRFCJhcYEVIzKRscHRQqEHUmJy8ILhFiQzVFWSk//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAAICAgICAgMBAAAAAAAAAAABAhEhMQMSBEET0VGhsRT/2gAMAwEAAhEDEQA/ANdojyS3uqNdEG4eaMuB0VeML8cZ/SqV7290fw1M6QAu64g2sF9zZgsT8cNj5n51a6gRB9qBJzbySqpVgeR7qdu/Q8/A1VWdmmqaNdsCoe8lDgNwEI4/MKvJ7AH1rjusG9WBrb24uItTmj3xQwx/dnJM1wcnafz3NR16V0nRL/UL9t9/eIQSfiOg/MfliitEtUv5VmnR4bG1Plwg8bzjc0mfj6/LHSsl/ilqTT3UVrArBEXaMKcZJP6DtSiuzB4RS6DqN/qvim2urkzXSQyqSoPu5LBeewGTW98SkFAsi+ddlx50i/hi4yIx9O31PJqr8L6JBZ+FGvIbpUklvYXZ1GNiibaN2euPex25J+Vtqoc2UJtkEdj52ELD35yQSZDnnGfqc5NacleiInPtCjG3WonBG+1vk6f6GP7V0XU1txovhe/mA3xJEwbaSeEB4AGc/wA1g9DCpqOorJjaTdo2eOsbCma741kudD0rStP3Qm0t41lut3vFwgBCeg7bq2WiE8mUvZYp7iR4U2ozsc92yTg/CmR8HJFNVWcjapOelTqMv24/KrEQSjmmVNOpxuxx6gYqHFMQ5Y3ZdyozD1ApVpLG2e/sYns8Jsyki4B5GOfrSpWB1e4kF3JqBa1QNGoBlJB5DAKM9OQM/X0FCaFJHrcV0tqyR2/tJjd0Yt5oAywU9hnHPfAHeiYo4I7q9s0b7wx7pFA52lsAlu3GR9MdxQ/ga3ktdIkjjVUcySMAoySOOSfT98elcSVrJ0sfFrJutfl0WBY47ZVMvnjrGq4X+/IHyzVD/iHAg9k2wmNFuYwqsecFT1+P80T4StZF8Taq8jRO8BCCRxgD7tG3HnnG8nFM8fD7qFgHx7ZEwaT8T9fe+tVFZRDeGH6Te20fhP7PdGlnW6ysCxlt6+0A8nGB1x19KD8ZapbaakPt84lvy4cQxNlYY8HIx+pPXt6VQS6g+n2lwkIlE8txJhmb7tdsoIbHqOBx1zVPNp91d2cmoTLOY5HO6eRSWlPc57Af86VcqeyVhYKS/vjdTTmPcI5pS/l9zn1/irCy0FxELnUjsTGVTpkfxQejiC1vXlu13eR+Fc9T8/SraC21DxJqDRtIkQRC2zeEwox1z06jsT04q5N6QJLbANSuIp/LhiTy44VJDAfi6Yqp37WBUYxXTfEfhfTtM8B3M6l/bEuljaZh3D4IC54yO5OfjjiuaMqqT+/U1cdEvLHFt8DHGOfWphZTXEUZt4WkO3nb65NQK4MLKBVvp9zJbaWZIJhFMpUxnZuO4MeeeBjPf4VRLCdCufsr2iCeR0ywI2oTk45+VKq2GNmmlMkhdicljzk5NKlgk7BBCsfiDVHCIDJFFlupJyew68fQde1WWiRhLIRqGwrTFlJwnDkZb1Hw/ihSjR6tftk+9bxk+8Fxgt1+HTgfAdKg0zUi0s8zyQw6fbvKGlmORM5diAg74Bzxnnj1rlR0s80CI/butFY1c+0oQCcDPkR8n4DFZTx/r9hL9xa3PtcySq7P/TuU8j4Dt/PWp7+4utRvr+3sRIsV26s8WcEDaqZcjtxnaPr6VmPGOjPpl3ZNcEF5Y0dwD+Htj4dP0qoNdqJadFfYwXmp3y3jMFIfcZZF4Jzngemf+ZrpOsIq6Etp5kqAqY44tmDzz75/asZpNhdarMEPlwWcShjvIHu59D16Hjn6da1MkjzXEcc7BWL58tMMf+pu57YH50TtvJSpLBnPBehW2oeKLmyvPO2xjcpgxuzlfXp17c/Ktncf+X1/SoF2RQz6NLGVMe5QQV3cZHPNZ7w5dDTPGGrT7fwb8f8A0DftV1r7mXUdClIGfLuhj4hl/itDG9g/jjV7efQdYs4t3mPdRyb2TheEyM9e3pXK/dGTjefVhx+VdC8YiNdMulSSNJZSm1GkCl9rDoO/AJrn+xVz5jFj/lXgfmaqGgPI/eRz3qaO4UWXlAMWwc4HAqFGHvYUKPQURbKRZuQM7lP9sVYmeZndiwKR5HTGfWlTo5O+CeP3NKgVnVdaeO+M8/nzRWM8fkJsG1rh1JHuAdEGckjHT55KHh+8vyLiRxb26oEhRDhYkyBhfjjq3w4Perix0naFv9X3SXGzJjx0HXoOg/0j65r3TtcXXfMe1tJlghk2xmQbA4HVsdQMgjHXj0riabWTpvJDaew2Pl2FpLErW8eZAW95RuJye/J/X5Vjv8RYkuVtmRTxKiK2ME/z8+9RaT5t34/vJvxCKJj5ZbhuQAOfT3T9KN8cK/kxNJIrN7VHwBgL+fX58VUY9WhSdpmV8Ox6VPfXHmowVE+7V0JYtu4AxWlt4olvITIxlfzAAx+7QH4L3+ZJo6y0ezge5vNNtZ50S2AeSaYoqufeOMjLDDDGARz1qrspoftOBWRAzP8A1t5kn/bt0Aq5LJCeCulnaDxTqiW9uLmZyNsRi3hh5Yz6AfPIo2a4utRa39tk+zBbb/KAjJZg2N2X5A6elCavb3h8Q6sukrKbxfLMYiOGPu8/pTLLVtbaT2K/sfOmGAsU8ZjlJzjgcbj8h2NaNEHmrWtomhXwtIlkuNybpS/mOw3D+onOKxRRiT5jBeeR1rY+LLF7fT4pJ4XWWXeyqoAAwVBO0cj6isdslc8rt+fGKqLTWA0SW0Jm84Iw9xN3vDrj9KtNFSF7Mm5/BhwP7UJpzJCLkSyRjdEVByRzRuhmH2CUXH4RvPAzzgVRLJBc2ie6kGV/58DXlLzoBwluxGAcnAyD9aVBJ2O3glGtX0kk9y6tCirEWBVPX5fHuag0GMRWZCo7FmcgJwD943U/96NRF9tnbC4VI8DlAOvb9jVfaFYbFcGVWd5crEpw58wj3jjj8xXHR1ezO6Spj8VaxsIRQqmTglmXjIXHTn/neo/GMaNYRhYGiX2yPhhgnPr3z8+adpshbxFqzphD5G7DKSR+EevX60zxJuawAL+YRexA+7tAOR0HPwq1tE+mayxCXWmXMD3CRG5kUZzk4CKOAD1934Vi7KSZNStkWCZEWfBGwRr3HQ4z/etLpsM8Fm0OhRw+1mZXYTAHCFRnHPXOev5VnnsJdIvRPf7oGV92ZF4k+AbOM1WbyVDjlJUkMuSsfjDVWkuWt1+7zKg5XKHp8e1H27Wlko1j2mWVYG8xfNbDtgeh5xyaotSubG51e7uHllRLoIMbVyu0ehYZz9KnGvaJ7HJYTSTPGy4ZFiVQeehG4nsOc1cl2I+KcHko9a8ST6vaGIxiGO3aUoQx3kOwPP5VmfMZ2O0FifrWm1ebSIohFpoeJtxLyLGhJUjgZDHiqXZG5wtzJz2aP+GqopRVIJJvIMittZXQg4zzVlpBUWU2Tj8X6UNHblN+ZEJIwMA/uKvvBlpbSpILmdkkLsixKAc+71PwzxVmcotFLHt2+5HMw9aVXAuNU2r5cSQrgYUMf5ryimRk6/vxeTbjGBtiwXO/Jw3QnvVA08sUEEck08UZkc7YovM3ZkY84U442+lZyfxvqyxXt5DHEu2VoQ2Pu3CdML1BweecdKhim8R3en2s2nWko8yLzDJM6FSSSQUz/SM8Kckd81zdbOhbLq0gWHVNXumVZIzGY9hxnhUYk7iBjB79MU/QxBq8twZIAlnbtuFmqeWxfOBvAHA4OB6HnqBVB4XvreDVfP1yO6kvJpd6wMjYZgAArDb+EMCfTGK1Mtld39rOLK9KLczNLK9sNzhic43bu3bNVSTG4T63WDT6THp8ryWluImlhCPM8S8bjn3QR0xjoPhUuowrNayWt7ClzbP7rB1yGHxFZTw41zpdxLa6bZqRPj3JJACMZBPTvknt0Pxo3UdW1iMOo05ptnVYEEmD8SHOPntrSMkhw4Zy0Yfxl4MfT4jdaWJbnTx+KHOZLf4g91+FV+n63ZT2B07xDYm7t3k8yK6iG2SInrx2GefmT1q41HxZr86SW01omlQsNpklhMjnPYYG3+xrIvFZvdM908sy5yXdmOfXoM/lihzV0UvGlyR7LDBr+zihMZguI5QU97DYKsDg9fXqPnjtQe0r3TP+9f5o7VoLSJSLVLbO4bWgnaQFcHPDEkduoFBB4VUAoM98sBVWQuDLTf8AfoN028ht3C3UEUkbMC7b3DgdwpU4GfiDXnt4iuhPZPJAyHMfvksh+DAChA8RPEIPw31O0sJjx9nR5z+NXbP64/tSsp+PWpf36Dn8RXUgBneGR+7GEAn5kAZ+tKqvMf8A7dh9TSp2L43+f0/o6bJaaBf2bRC19mVmMjRrOR7x4J9Ky3h/XpLDX4XBmlt7NZY4IQ2Qi4IGMnH4e/U/WruZ9iHKbm+FYK2maO7MhXDZIIz3PBpdUZxk0zXT+PtVub4rJcJFbM3DMGGxfUhSc/SotK9jv/EdtLLq0U1tF95cMInhDKP82eMElR171k7jBY49akt3MdjdEE++VTA79aSivRUp26ejbax46aR7lNI3RtL7puyQXKeigcL8/T0rK2eoXdhcGeyuJYpWyGdGwWB659aq0IDDHFEjJ71DjR6Pjc3aNJEsuoXPmMsk3ug8LIS/Hbg0foNpb3jPLfXksUSnCmGJSWPfqcYqruJplii2yuEBI27uA3r+RA+lOi1XUIlCxahdIo7K5A/WtIpbOXl5+SMnGzeQjQk2rHcXHxZ41GfyP7UetzYxqPZJ2d89On71zf7Z1P8A+Uvv/wBW/mpItc1VGBGq33p/67j9DWnZGHys6tZyQ3Vqwmt4H2na2Ylwe4NMm0jRrsET6bak/wCZYwp/Mc1y671rU3Yn7Qu9wbhvaHPHXbye380Todzqup3cluNVvEZYi4xKecEfzQqeKBcrXs1N54AtpHDWOpPCvOVnQPj5EEf3pVX3drf2zOPt3UjsnkhOH67COevfIpVLUR/6pfksL25jfIMaQv2x+Bv4rB2jxR6srTQLNGJSDGzFQ/Pr2zW1mjEwO7+7VmtU0kKXdFPJPTkGgyWBeIBo5VfsyG+trkP97BckMoGOqsOfThgKqd223I/1g/2NFx6nOiLbahH7XDGNqpMxDIP9LdR8jkfChpZYNw8mNtobOJDnI9DikW6eQc9c0TGcqPlURKezqNg378lh6Y6Yr2NsClLRp48+sgjZ5sTRDG48pk45Hb6jP1xQzJLGcPHMp9CSP2qdSKOOqqDCsgl9yMI2yZk4HA6fTtSi/R183DxzXdyoqTIB+IyD/qpBgzAeYwyQMk8Crn7Qt2YGOe6GQcozK+D2wWGfoR9ahN7GSdxcjH9UaGm5Uc8fGUl2U0Q3Ol38SbjbyyJ2eP31P1Gajsrm+0y5F1aF4ZgpXcU7H50lvJEJZBCpPcQID+eKedUu8Y804+HH6U1IyfFXsJ/8UaoM+9bZJLHNrEck9T+HrXtVz3UzHJkfP+9v5pUWZ9Eba5jJI2DB+eKH8qcElolcf7qs268rgVGVU9v70yTN6pp4ky4HP6VQvCySbcHrgVuprdX6VT6jphkQlBhh0IoAzRyOOaSmnzRSRuRIpB+Peo6Q0x+/FeY3HqM/E4ptKiinNvDHD3TnuPSvd+ev6UylRQlJpUh5I9T+VNJrylRQrYqVKlTA6XMDyMfnzUWQvaiXIJ5odk7/AAzQIZxnNMYjNLdjtXjcqeAKABLi3gnUiRFz8ap7rSYxkpkCrx+nFCtyPSgDOtZqDgtg+tePp8oGUww7Yq5njBoQhoWOxyM9u1AFS0LqeRTSjDtVwyLOpfGDQcyGM9cigALaa8wfSpyKYaAI8UqfXlAH/9k=",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      ],
      period: "26/06",
    },
  ];
  return (
    <ProfileLayout title="Notification">
      <Card flex="1">
        <HStack
          justifyContent={"space-between"}
          p="20px"
          borderBottom={colors["borderBottom"]}
        >
          <TextComponent
            rest={{ fontSize: "20px", fontWeight: "700", lineHeight: "28px" }}
          >
            Notifications
          </TextComponent>
          <Button variant="link" color={colors["primary"]} fontSize="14px">
            Mark all as read
          </Button>
        </HStack>
        <List p="0" m="0">
          {data.map((item, index) => (
            <ListItem
              key={index}
              display="flex"
              borderBottom={colors["borderBottom"]}
              p="15px"
              gap="20px"
            >
              <SimpleGrid
                width={"56px"}
                height="56px"
                minChildWidth={"27px"}
                spacing="2px"
                overflow={"hidden"}
              >
                {item.images.map((x, i) => (
                  <Image
                    src={x}
                    alt={"range of cars that is affordable"}
                    w="100%"
                  />
                ))}
              </SimpleGrid>
              <Stack mr="auto">
                <TextComponent
                  rest={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "18px",
                  }}
                >
                  {item.title}
                </TextComponent>
                <TextComponent
                  rest={{
                    fontSize: "14px",
                    color: "#6c8EA0",
                    lineHeight: "16px",
                  }}
                >
                  {item.period}
                </TextComponent>
              </Stack>
              <PopoverComponent>
                <Button variant="ghost" size="sm">
                  <Icon
                    as={FiMoreVertical}
                    alignSelf={"center"}
                    cursor="pointer"
                  />
                </Button>
              </PopoverComponent>
            </ListItem>
          ))}
        </List>
      </Card>
    </ProfileLayout>
  );
}