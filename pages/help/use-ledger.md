---
title: Introduction to the SDK
---

_Topics on this page..._

- [What can you do with the SDK?](/help/use-ledger#what-can-you-do-with-the-sdk-?)
- [Resources Provided](/help/use-ledger#resources-provided)
- [Getting started](/help/use-ledger#getting-started)
- [Downloading the SDK](/help/use-ledger#downloading-the-sdk)

This is an introduction to using the SDK. The .zip package for each SDK contains a readme.md file with specific instructions for install and using it.

As part of creating a Ledger in the Codenotary Cloud UI, you'll create a Signer ID that you can use with the SDK to manage query transactions.

## What can you do with the SDK?

Available methods are easy to understand and use. They are discussed in detail in the ```readme.md``` file in the SDK root.

The core methods provided are these:

**connect** provides the initial authentication with the platform.

**set** lets you write key-value pairs to a Ledger. There are several variations of set.

**get** lets you retrieve data from a Ledger. There are several variations of get.

## Resources Provided

The SDK for each supported language is available for download as a zip file from here.

Subfolders include examples, libraries, and a readme.md file that provides instructions for initial installation, notes on instantiating the client, and using the available methods to interact with your Ledgers.

- Samples folder
  Each supported language includes samples that demonstrate use of available methods in multiple contexts.

- Libraries

- Readme.md

##### What you'll need

The first step is to instantiate a LC client. You only need one

- Signer ID (created in the UI)

- Server IP address

- port number (typically the same port on which the web UI is exposed)

## Getting started

Once you have at least one Ledger in the UI, it's a quick few steps to accessing it from within your code.

**1.  Download the SDK**
Go to the developers page and download the zip file that matches your preferred development language.

**2.  Install language-specific libraries**
Unzip the file to your development environment.

**3.  Instantiate the client**
Initialize and connect to your Codenotary Cloud platform instance. Here's where you use the Signer ID generated from the Ledger your client is connecting to.

**4.  Use client methods within your code to read and write transactions**
Available methods are provided by the client object you initialize in step 3.

## Downloading the SDK

To access the SDK, click the the Developers icon on the left-hand navigation panel.

Click **Download SDKs**.

<help-image src="/alt_developer_section.jpg" alt="Developer section" ></help-image>

Select the SDK that matches your development language.

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

<ui-prev-next class="mt-1" :prev="{ url: '/manage-ledger', label: 'Managing  Ledgers' }" :next="{ url: '/query-ledger', label: 'Querying Ledgers' }"></ui-prev-next>


