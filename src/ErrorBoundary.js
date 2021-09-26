import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const ErrorScreen = ({ error }) => {
      return (
        <div className="error">
          <h3>We are sorry... something went wrong</h3>
          <p>ERROR: {error.message || error}</p>
        </div>
      );
    };

    const { error } = this.state;
    const { children, fallback } = this.props;
    
    if (error || fallback) return <ErrorScreen error={error || fallback} />;

    return children;
  }
}
