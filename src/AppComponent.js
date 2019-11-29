import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';
import { ApolloProvider } from '@apollo/react-hooks';
import KSSOController from './ksso-form/components/KSSOController';

export default class extends React.Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<span>Building CRUD from Liferay's React API</span>
					<KSSOController />
				</div>
			</ApolloProvider>
		);
	}	
}