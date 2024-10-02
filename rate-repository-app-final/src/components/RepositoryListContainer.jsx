import React from "react";
import { FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import SortedRepositoryList from "./SortedRepositoryList";
import FilterRepositoryList from "./FilterRepositoryList";

class RepositoryListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
    };
  }

  componentDidMount() {
    this.updateRepositories(this.props.repositories);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.repositories !== this.props.repositories) {
      this.updateRepositories(this.props.repositories);
    }
  }

  updateRepositories(repositories) {
    if (repositories && repositories.edges) {
      const repositoryNodes = repositories.edges.map(edge => edge.node);
      this.setState({ repositories: repositoryNodes });
    }
  }

  render() {
    return (
      <FlatList
        data={this.state.repositories}
        ItemSeparatorComponent={this.props.ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repository={item} showGitHubButton={false} />}
        ListHeaderComponent={
          <>
            <FilterRepositoryList setSelectedFilter={this.props.setSelectedFilter} />
            <SortedRepositoryList
              selectedSort={this.props.selectedSort}
              setSelectedSort={this.props.setSelectedSort}
            />
          </>
        }
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;
