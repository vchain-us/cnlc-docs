---
title: Understanding the System
---

If you're new to the Codenotary Cloud platform, taking a moment to review the topics on this page will make it easier to understand other help content.

###### _Topics on this page..._

- [What is Codenotary Cloud?](/help/introduction#what-is-codenotary-cloud)
- [What are some typical use cases?](/help/introduction#what-are-some-typical-use-cases)
- [Major components](/help/introduction#major-components)

## What is Codenotary Cloud?

Codenotary Cloud (the 'Codenotary Cloud Platform') is designed around the concept of immutability. That simply means that Ledger entries cannot be modified or deleted after they're posted.

Like Blockchain, Codenotary Cloud ledger entries are protected by both the architecture and encryption. Unlike Blockchain, Codenotary Cloud doesn't require transactions to be extensively replicated across network nodes.

That means users get the benefits of a secure Ledger packaged in architecture that far outperforms the speed of Blockchain read and write transactions. These performance trade-offs often make sense in environments that require secure transaction logs, but don't necessarily require the resource-intensive complexity of full Blockchain implementations.

## What are some typical use cases?

The application of secure Ledgers extends well beyond financial transactions. Businesses in every vertical can benefit from recording mission-critical transactions in a secure, immutable Ledger.

* Store every update to sensitive database fields (credit card or bank account data) of an existing application database
* CI/CD recipes to protect build and deployment pipelines
* Invoices and documents
* Digital certificates
* Digital objects identification (digital checksum)
* Store log streams (i. e. access logs)

The Codenotary Cloud platform provides additional security for key transactions in any business while enabling compliance with data privacy and security regulations like PCI-DSS-10.

## Major Components

Whether deployed on-premises or in the cloud, Codenotary Cloud provides you a browser-based dashboard that can be used to manage the software:

- [Core platform](/help/introduction#core-platform)
- [User Interface](/help/introduction#user-interface)
- [SDK](/help/introduction#sdk)

### Core platform

The core Codenotary Cloud platform manages Ledger data, security, and the API gateway access through our SDK.

Users interact with the platform in two ways: through a browser-based UI, and a programming interface provided by CodeNotary SDKs

The user interface provides for dashboard, administration and configuration functions - creating Ledgers, running reports and so on.

The programming interface provided by our SDKs lets you perform Ledger transactions with the core.

Codenotary Cloud uses an append-only data structure to store inserts and updates along the correct timestamp and data sequence. Powerful query capabilities allow for a fast data search and immediate inclusion proof.

### User Interface

The user interface is a browser-based GUI. It's where you create and manage Ledgers, create Signer IDs, view statistics, run audit reports, and access various administrative functions.

<help-image src="/alt_ledger_list.jpg" alt="Ledger list" > </help-image>

### SDK

Your applications with through CodeNotary Ledgers through provided SDKs and plugins. You can post new entries as well as cryptographically verify and query data from Ledger.

Each SDK and plugin has its own Signer ID to be used to authenticate against Codenotary Cloud.

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

- Ledgers are set up and configured on the Codenotary Cloud web UI.

- Transactions are written to the Ledger as key-value pairs, using the provided SDK.

<ui-prev-next class="mt-1" :prev="{ url: '/', label: 'About Help' }" :next="{ url: '/overall-status', label: 'Home - System Status' }"></ui-prev-next>
