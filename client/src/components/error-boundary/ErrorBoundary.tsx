import React, { Component } from 'react';

interface EBState {
  hasError: boolean;
  error: {
    message: string;
  };
}

export default class ErrorBoundary extends Component<{}, EBState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: { message: '' } };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info);
    this.setState({ error });
  }
  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong</h1>
          <h2>{this.state.error.message}</h2>
        </>
      );
    }

    return this.props.children;
  }
}
