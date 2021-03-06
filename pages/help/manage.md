---
title: Managing the Appliance
---

The Manage page provides a set of administration tools to help you manage the CNLC platform.

###### _Topics on this page..._

- [The Manage Page](/help/manage#the-manage-page)

- [Using Management Tools](/help/manage#using-management-tools)

## The Manage Page

All system admin functions, from backup to logging and licensing, are available under tabs on the *Manage* page.

##### System Management Tools

| Tab                                                         | Action                                                     |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| [Email Notifications](/help/manage#email-notifications)      | Configure outbound email notifications of system messages. |
| [Logging](/help/manage#logging)                              | Export or read system logs.                                |
| [License](/help/manage#license)                              | Apply or update your CNLC user license.                    |
| [Backup](/help/manage#backup)                                | Set automatic Ledger backups.                              |
| [Maintenance](/help/manage#maintenance)                      | Restart the system, or inhibit Ledger transactions.        |
| [Appliance  Information](/help/manage#appliance-information) | Selected system stats.                                     |
| [Patching](/help/manage#patching)                            | Upload and apply a software patch.                         |
| [TLS Configuration](/help/manage#tls-configuration)          | Upload TLS configuration file.                             |

All options open a simple text form that lets you enter changes.

## Using Management Tools

The options available under each tab are discussed in more detail below.

#### Email Notifications

Configure outbound email notifications of system messages.

#### Logging

Define the URL, including port number, where system logs should be forwarded.

Press the **Save changes** button after modifying the text.

<v-img src="/alt_logging_dlog.png" alt="" ></v-img>

#### License

Lets you apply or update your CNLC user license.

You can paste the license string directly into the text box, or click the Select license file icon to load it from your local drive.

Click the **Update license** button when you're done.

<v-img src="/alt_lic_dlog.png" alt="" ></v-img>

#### Backup

The Backup tab lists all previous backups, lets you download them, or create a new backup.

To create a backup now, click the **Create an on-demand backup** button. Click Download next to any backup to get the backed-up data in archive format.

<v-img src="/alt_bakup_dlog.png" alt="" ></v-img>

#### Maintenance

This tab let's you reboot the platform, or put the system into maintenance mode to block SDK access while server maintenance tasks are performed.

To reboot, click the **Reboot appliance** button.

If maintenance mode is currently off, the only other option is to turn it on (inhibit Ledger access) by clicking the **Turn ON maintenance mode** button. After maintenance is complete, click the **Turn OFF maintenance mode** button.

<v-img src="/alt_maint_dlog.png" alt="" ></v-img>

#### Appliance Information

This tab displays current system status.

#### Patching

From the *Patching* tab you can apply a software patch from CodeNotary.

If CodeNotary sends you a patch file, click the **Start patch upload** button to open a file dialog and select it from your local drive. Only .zip, .rar, or .tar.gz files are valid.

<v-img src="/alt_patch_dlog.png" alt="" ></v-img>

#### TLS Configuration

Upload TLS configuration file.

<v-img src="/alt_tls_cfg_dlg.png" alt="" ></v-img>

<prev-next class="_margin-top-1" :prev="{ url: '/messages', label: 'Messages and Notifications' }"></prev-next>
