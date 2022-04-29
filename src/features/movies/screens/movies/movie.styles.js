import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, List } from "react-native-paper";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
`;
export const CardContainer = styled.View`
  flex: 0.5;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export const MyMovieListContainer = styled.View`

  padding-left:10px
  margin-top: 4px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const NoMovieText = styled.Text`
  margin-left:30%
  justify-content: center;
  align-items: center;
  
`;

export const MoviesHeaderText = styled.Text`
  font-size: 16px;
  padding: 10px;
  font-weight: bold;
  justify-content: center;
`;
export const GenreListHeadingContainer = styled.View`
  margin-top:5px
  width: 100%;
  height:20px
  justify-content: center;
  margin-bottom:12px
  padding-left:10px
  font-size:16px
`;
export const GenreTextContainer = styled.View`
  padding-left: 10px;
  color: red;
`;
export const GenreText = styled.Text`
  color: red;
`;

export const CollapsibleContainer = styled(List.Accordion).attrs({
  title: "My movies",
  color: "red",
  titleStyle: {
    color: "black",
    fontSize: 16,
    paddingLeft: 5,
    fontWeight: "bold",
  },
})``;

export const NoIntenetContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const NoInternetText = styled.Text`
  color: black;
`;
