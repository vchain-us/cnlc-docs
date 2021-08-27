---
title: Messages and Notifications
---

The CNIL platform reports critical system events and display them on the *Messages* page in tabular format. Users can see separate lists to distinguish active messages from those that have already been read and acknowledged.

###### _Topics on this page..._

- [How do you know there are new messages?](/help/messages#how-do-you-know-there-are-new-messages-?)

- [The *Messages* Page](/help/messages#the-messages-page)

- [Message Types](/help/messages#message-types)

## How do you know there are new messages?

All new messages are displayed on the *Messages* page under the *Active messages* tab. When any new messages are waiting to be read, the UI alerts users in three different locations:

1. <p class="inline-img"><strong>Alert Icon</strong><help-image src="/alt_bell_alert.png" alt=""><help-image/> The alert bell icon on the upper right of the status bar will display a flashing red dot above the bell.</p>

2. **Home Page**  The messages panel on the [Home page](/help/overall-status) turns red and indicates the number of messages waiting.

<help-image src="/alt_msg_notif.png" alt="" ></help-image>

3. **[Ledger Management Page](/help/manage-ledger)**   For messages related to a particular Ledger, the messages panel on the management page for that Ledger red and indicates the number of messages waiting.

Additionally, the platform can see notification emails automatically through your SMTP server. Any number of recipients can be configured, and TO addresses are not constrained to users configured in the system.

## The Messages Page

The *Messages* page consists of two tabs - *Active messages* and *Acknowledged messages*. Messages listed on the *Active messages* tab have not yet been acknowledged by any user.

After a user acknowledges  a particular message, the system shifts it from the unread messages table and lists it under the Acknowledged messages tab.

<help-image src="/alt_msg_main.png" alt="" ></help-image>

##### Acknowledging a Message

To acknowledge any message, simply click its **Acknowledge** button on the far right of the row.

##### View Message Detail

To see the message detail, click any data field in the row.

## Message Types

The system categorizes messages into the following types.

- Tamper: suspected tampering ongoing on a Ledger (a malicious user could have tried to edit or forge data).
- Application: issue with receiving data from an external source (plugin, SDK).
- License: license expiration warning.
- Memory: low memory warning.
- Disk: low disk space warning.
- CPU: high CPU usage warning.
- Container: unhealthy status for an application component.

For additional help understanding messages, please don't hesitate to contact us by email support@codenotary.com or chat with a support representative at https://codenotary.com.

<ui-prev-next class="mt-1" :prev="{ url: '/user-management', label: 'User Management' }" :next="{ url: '/manage', label: 'Manage Appliance' }"></ui-prev-next>
