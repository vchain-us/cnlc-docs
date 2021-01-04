---
title: Understanding the System
---

If you're new to the CodeNotary Ledger Compliance platform, taking a moment to review the topics on this page will make it easier to understand other help content.

###### _Topics on this page..._

- [What is CodeNotary Ledger Compliance?](/help/introduction#what-is-codenotary-ledger-compliance)
- [What are some typical use cases?](/help/introduction#what-are-some-typical-use-cases)
- [Major components](/help/introduction#major-components)

## What is CodeNotary Ledger Compliance?

CodeNotary Ledger Compliance (the 'CNLC Platform') is designed around the concept of immutability. That simply means that Ledger entries cannot be modified or deleted after they're posted.

Like Blockchain, CNLC Ledger entries are protected by both the architecture and encryption. Unlike Blockchain, CNLC doesn't require transactions to be extensively replicated across network nodes.

That means users get the benefits of a secure Ledger packaged in architecture that far outperforms the speed of Blockchain read and write transactions. These performance trade-offs often make sense in environments that require secure transaction logs, but don't necessarily require the resource-intensive complexity of full Blockchain implementations.

## What are some typical use cases?

The application of secure Ledgers extends well beyond financial transactions. Businesses in every vertical can benefit from recording mission-critical transactions in a secure, immutable Ledger.

* Store every update to sensitive database fields (credit card or bank account data) of an existing application database
* CI/CD recipes to protect build and deployment pipelines
* Invoices and documents
* Digital certificates
* Digital objects identification (digital checksum)
* Store log streams (i. e. access logs)

The CNLC platform provides additional security for key transactions in any business while enabling compliance with data privacy and security regulations like PCI-DSS-10.

## Major Components

Whether deployed on-premises or in the cloud, CodeNotary Ledger Compliance provides you a browser-based dashboard that can be used to manage the software:

- [Core platform](/help/introduction#core-platform)
- [User Interface](/help/introduction#user-interface)
- [SDK](/help/introduction#sdk)

### Core platform

The core CodeNotary Ledger Compliance platform manages Ledger data, security, and the API gateway access through our SDK.

Users interact with the platform in two ways: through a browser-based UI, and a programming interface provided by CodeNotary SDKs

The user interface provides for dashboard, administration and configuration functions - creating Ledgers, running reports and so on.

The programming interface provided by our SDKs lets you perform Ledger transactions with the core.

Ledger Compliance uses an append-only data structure to store inserts and updates along the correct timestamp and data sequence. Powerful query capabilities allow for a fast data search and immediate inclusion proof.

### User Interface

The user interface is a browser-based GUI. It's where you create and manage Ledgers, create API keys, view statistics, run audit reports, and access various administrative functions.
<v-img src="/alt_ledger_plain.png" alt="" > </v-img>

### SDK

Your applications with through CodeNotary Ledgers through provided SDKs and plugins. You can post new entries as well as cryptographically verify and query data from Ledger.

Each SDK and plugin has its own API key to be used to authenticate against Code Notary Ledger Compliance.

##### SDK Language Support

The following integrations are available:

* Java
* .Net
* Python
* Go
* Node.js

**Plugins**

* PostgreSQL Change Data Capture
* CI/CD digital asset notarization

## Summary

- Ledgers provide secure, immutable storage appropriate sensitive or mission-critical data.

- Ledgers are set up and configured on the CNLC web UI.

- Transactions are written to the Ledger as key-value pairs, using the provided SDK.

<prev-next class="_margin-top-1" :prev="{ url: '/', label: 'About Help' }" :next="{ url: '/overall-status', label: 'Home - System Status' }"></prev-next>
