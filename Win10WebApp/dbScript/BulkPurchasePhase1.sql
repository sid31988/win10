USE [win10master]
GO
/****** Object:  ForeignKey [FK_BulkPurchaseForex_BulkPurchase]    Script Date: 02/06/2019 18:37:46 ******/
ALTER TABLE [dbo].[BulkPurchaseForex] DROP CONSTRAINT [FK_BulkPurchaseForex_BulkPurchase]
GO
/****** Object:  Table [dbo].[BulkPurchaseForex]    Script Date: 02/06/2019 18:37:46 ******/
ALTER TABLE [dbo].[BulkPurchaseForex] DROP CONSTRAINT [FK_BulkPurchaseForex_BulkPurchase]
GO
ALTER TABLE [dbo].[BulkPurchaseForex] DROP CONSTRAINT [DF_BulkPurchaseForex_CreatedDate]
GO
ALTER TABLE [dbo].[BulkPurchaseForex] DROP CONSTRAINT [DF_BulkPurchaseForex_IsDeleted]
GO
DROP TABLE [dbo].[BulkPurchaseForex]
GO
/****** Object:  Table [dbo].[OtherMasters]    Script Date: 02/06/2019 18:37:46 ******/
ALTER TABLE [dbo].[OtherMasters] DROP CONSTRAINT [DF_OtherMaster_IsActive]
GO
DROP TABLE [dbo].[OtherMasters]
GO
/****** Object:  Table [dbo].[PartyMasters]    Script Date: 02/06/2019 18:37:46 ******/
ALTER TABLE [dbo].[PartyMasters] DROP CONSTRAINT [DF_PartyMasters_CreatedDate]
GO
DROP TABLE [dbo].[PartyMasters]
GO
/****** Object:  Table [dbo].[TCMasters]    Script Date: 02/06/2019 18:37:47 ******/
DROP TABLE [dbo].[TCMasters]
GO
/****** Object:  Table [dbo].[BulkPurchase]    Script Date: 02/06/2019 18:37:46 ******/
ALTER TABLE [dbo].[BulkPurchase] DROP CONSTRAINT [DF_BulkPurchase_CreatedDate]
GO
ALTER TABLE [dbo].[BulkPurchase] DROP CONSTRAINT [DF_BulkPurchase_IsDeleted]
GO
DROP TABLE [dbo].[BulkPurchase]
GO
/****** Object:  Table [dbo].[BulkPurchase]    Script Date: 02/06/2019 18:37:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BulkPurchase](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FFMCAD] [int] NULL,
	[DeliveryIn] [int] NULL,
	[Date] [datetime] NULL,
	[CostCentre] [int] NULL,
	[Quota] [int] NULL,
	[Broker] [int] NULL,
	[SubBroker] [int] NULL,
	[Reference] [nvarchar](250) NULL,
	[Remark] [nvarchar](500) NULL,
	[GrossAmt] [decimal](29, 4) NULL,
	[FxGST] [decimal](29, 4) NULL,
	[TCCardChrg] [decimal](29, 4) NULL,
	[SrvChrg] [int] NULL,
	[SrvChrgAmt] [decimal](29, 4) NULL,
	[STXPercentage] [decimal](29, 4) NULL,
	[STXAmt] [decimal](29, 4) NULL,
	[ChargesTax] [int] NULL,
	[RoundOff] [decimal](29, 4) NULL,
	[NetPayable] [decimal](29, 4) NULL,
	[CreatedDate] [datetime] NULL CONSTRAINT [DF_BulkPurchase_CreatedDate]  DEFAULT (getdate()),
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [bit] NULL CONSTRAINT [DF_BulkPurchase_IsDeleted]  DEFAULT ((0)),
 CONSTRAINT [PK_BulkPurchase] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TCMasters]    Script Date: 02/06/2019 18:37:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TCMasters](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Date] [datetime] NULL,
	[Issuer] [nvarchar](50) NULL,
	[Curr] [nvarchar](50) NULL,
	[Prefix] [nvarchar](50) NULL,
	[StartNo] [int] NULL,
	[Nos] [int] NULL,
	[EndNo] [int] NULL,
	[Deno] [int] NULL,
	[Value] [int] NULL,
	[Type] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [bit] NOT NULL,
	[RefrNo] [int] NULL,
	[CardNo] [int] NULL,
	[ProxyNo] [int] NULL,
	[ExpDate] [datetime] NULL,
 CONSTRAINT [PK_dbo.ReceiveTrustTCMasters] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[TCMasters] ON
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (62, CAST(0x0000A9DF00000000 AS DateTime), N'HDFC', N'HDF', N'HDF', 10010, 3333, 10100, 1100, 100, N'ReceiveTrust', NULL, CAST(0x0000A9E6012EC7A5 AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (63, CAST(0x0000A9D100000000 AS DateTime), N'k', N'k', N'k', 10010, 1, 10100, 1, 1, N'ReceiveTrust', CAST(0x0000A9DF00F31792 AS DateTime), CAST(0x0000A9DF00F3B3E5 AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (64, CAST(0x0000A9DF00000000 AS DateTime), N'IDBI', N'IDB', N'IDB', 10010, 110, 10100, 100, 100, N'ReceiveTrust', NULL, CAST(0x0000A9E700C80BD5 AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (65, CAST(0x0000A9CE00000000 AS DateTime), N'11', N'111', N'11', 101, 1, 1051, 1001, 1, N'ReceiveTrust', NULL, CAST(0x0000A9E700C81234 AS DateTime), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (66, CAST(0x0000A9E500000000 AS DateTime), N'ICICI', N'ICI', N'ICI', 10010, 222, 10100, 111, 111, N'ReceiveTrust', NULL, CAST(0x0000A9E6012FBB51 AS DateTime), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (67, CAST(0x0000A9CB00000000 AS DateTime), N'demo11', N'demo', N'demp1', 1, 1, 1, 1, 1, N'ReceiveTrust', NULL, CAST(0x0000A9E6012D2AB5 AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (68, CAST(0x0000A9E600000000 AS DateTime), N'IDBI', N'IDB1', N'IDB1', 1100, 1100, 1110, 1110, 1114, N'ReceiveTrust', CAST(0x0000A9E600FAB045 AS DateTime), CAST(0x0000A9E6012FB3BF AS DateTime), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (69, CAST(0x0000A9E600000000 AS DateTime), N'ICICI', N'ICI', N'ICI', 100, 1111, 1110, 110, 1100, N'ReceiveTrust', CAST(0x0000A9E601007EF7 AS DateTime), CAST(0x0000A9E601009E17 AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (70, CAST(0x0000A9E600000000 AS DateTime), N'aasa', N'aa', N'aa', 1110, 1111, 111, 111, 11, N'ReceiveTrust', CAST(0x0000A9E6010C228C AS DateTime), CAST(0x0000A9E6010C2FC3 AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (71, CAST(0x0000AA0200000000 AS DateTime), N'aa', N'aa', N'aa', 1, 1, 1, 1, 1, N'ReceiveTrust', CAST(0x0000A9E700C836A3 AS DateTime), NULL, 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (72, CAST(0x0000A9EC00000000 AS DateTime), N'HDFC', N'B', NULL, 0, NULL, NULL, NULL, NULL, N'ReceiveForex', CAST(0x0000A9E700EEC085 AS DateTime), CAST(0x0000A9E700EF0818 AS DateTime), 1, 111, 11111, 111, CAST(0x0000A9FB00000000 AS DateTime))
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (73, CAST(0x0000A9ED00000000 AS DateTime), N'III', N'B', NULL, 0, NULL, NULL, NULL, NULL, N'ReceiveForex', CAST(0x0000A9E700EF3456 AS DateTime), NULL, 0, 2, 2, 2, CAST(0x0000AA0200000000 AS DateTime))
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (74, CAST(0x0000AA0200000000 AS DateTime), N'WW', N'WW', N'WW', 10, 1, 1, 1, 1, N'ReceiveTrust', CAST(0x0000A9E700EF5CB3 AS DateTime), NULL, 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (75, CAST(0x0000A9F400000000 AS DateTime), N'k1', N'B1', NULL, 0, NULL, NULL, NULL, NULL, N'ReceiveForex', CAST(0x0000A9E700EF82E8 AS DateTime), CAST(0x0000A9E700EF9A5B AS DateTime), 0, 12, 12, 12, CAST(0x0000AA0200000000 AS DateTime))
SET IDENTITY_INSERT [dbo].[TCMasters] OFF
/****** Object:  Table [dbo].[PartyMasters]    Script Date: 02/06/2019 18:37:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PartyMasters](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Type] [nvarchar](15) NULL,
	[Name] [nvarchar](100) NULL,
	[Address1] [nvarchar](100) NULL,
	[Address2] [nvarchar](100) NULL,
	[Address3] [nvarchar](100) NULL,
	[City] [nvarchar](50) NULL,
	[Pincode] [nvarchar](10) NULL,
	[State] [nvarchar](50) NULL,
	[Country] [nvarchar](50) NULL,
	[Peraddress1] [nvarchar](100) NULL,
	[Peraddress2] [nvarchar](100) NULL,
	[Peraddress3] [nvarchar](100) NULL,
	[Percity] [nvarchar](50) NULL,
	[Perpincode] [nvarchar](10) NULL,
	[Perstate] [nvarchar](50) NULL,
	[Percountry] [nvarchar](50) NULL,
	[Nationality] [nvarchar](50) NULL,
	[Residency] [nvarchar](10) NULL,
	[Contactperson1] [nvarchar](50) NULL,
	[Tel1] [nvarchar](12) NULL,
	[Email1] [nvarchar](50) NULL,
	[Contactperson2] [nvarchar](50) NULL,
	[Tel2] [nvarchar](12) NULL,
	[Email2] [nvarchar](50) NULL,
	[Primaryid] [nvarchar](50) NULL,
	[Panno] [nvarchar](10) NULL,
	[Aadharno] [nvarchar](16) NULL,
	[Gst] [nvarchar](15) NULL,
	[CreatedDate] [datetime] NULL CONSTRAINT [DF_PartyMasters_CreatedDate]  DEFAULT (getdate()),
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [bit] NULL,
	[Mobile] [nvarchar](20) NULL,
	[OpeningBalance] [nvarchar](20) NULL,
	[BalancePost] [nvarchar](20) NULL,
	[AddressInBill] [nvarchar](200) NULL,
	[Lock] [nvarchar](20) NULL,
	[Category] [nvarchar](20) NULL,
	[Broker] [nvarchar](20) NULL,
	[Location] [nvarchar](50) NULL,
	[CollectGST] [nvarchar](20) NULL,
	[RBILICNo] [nvarchar](20) NULL,
	[RBIExp] [datetime] NULL,
	[ControlAC] [nvarchar](20) NULL,
 CONSTRAINT [PK_PartiesMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[PartyMasters] ON
INSERT [dbo].[PartyMasters] ([Id], [Type], [Name], [Address1], [Address2], [Address3], [City], [Pincode], [State], [Country], [Peraddress1], [Peraddress2], [Peraddress3], [Percity], [Perpincode], [Perstate], [Percountry], [Nationality], [Residency], [Contactperson1], [Tel1], [Email1], [Contactperson2], [Tel2], [Email2], [Primaryid], [Panno], [Aadharno], [Gst], [CreatedDate], [UpdatedDate], [IsDeleted], [Mobile], [OpeningBalance], [BalancePost], [AddressInBill], [Lock], [Category], [Broker], [Location], [CollectGST], [RBILICNo], [RBIExp], [ControlAC]) VALUES (1, N'F', N'Franchiseekd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, CAST(0x0000A9EC000AF506 AS DateTime), NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[PartyMasters] ([Id], [Type], [Name], [Address1], [Address2], [Address3], [City], [Pincode], [State], [Country], [Peraddress1], [Peraddress2], [Peraddress3], [Percity], [Perpincode], [Perstate], [Percountry], [Nationality], [Residency], [Contactperson1], [Tel1], [Email1], [Contactperson2], [Tel2], [Email2], [Primaryid], [Panno], [Aadharno], [Gst], [CreatedDate], [UpdatedDate], [IsDeleted], [Mobile], [OpeningBalance], [BalancePost], [AddressInBill], [Lock], [Category], [Broker], [Location], [CollectGST], [RBILICNo], [RBIExp], [ControlAC]) VALUES (2, N'R', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, CAST(0x0000A9EC000B59DF AS DateTime), NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, N'Broker1', NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[PartyMasters] ([Id], [Type], [Name], [Address1], [Address2], [Address3], [City], [Pincode], [State], [Country], [Peraddress1], [Peraddress2], [Peraddress3], [Percity], [Perpincode], [Perstate], [Percountry], [Nationality], [Residency], [Contactperson1], [Tel1], [Email1], [Contactperson2], [Tel2], [Email2], [Primaryid], [Panno], [Aadharno], [Gst], [CreatedDate], [UpdatedDate], [IsDeleted], [Mobile], [OpeningBalance], [BalancePost], [AddressInBill], [Lock], [Category], [Broker], [Location], [CollectGST], [RBILICNo], [RBIExp], [ControlAC]) VALUES (3, N'R', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, CAST(0x0000A9EC000B7E96 AS DateTime), NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, N'Broker2', NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[PartyMasters] OFF
/****** Object:  Table [dbo].[OtherMasters]    Script Date: 02/06/2019 18:37:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OtherMasters](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Type] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [bit] NOT NULL CONSTRAINT [DF_OtherMaster_IsActive]  DEFAULT ((1)),
 CONSTRAINT [PK_OtherMaster] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[OtherMasters] ON
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (2, N'Tomss', N'Reference', CAST(0x0000A99400000000 AS DateTime), CAST(0x0000A996012B8833 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (3, N'Jimsergal', N'Cost Center', CAST(0x0000A99400000000 AS DateTime), CAST(0x0000A99900E18979 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (4, N'Xngs', N'Category', CAST(0x0000A99400000000 AS DateTime), CAST(0x0000A996012545E6 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (5, N'nepals', N'Category', CAST(0x0000A994012846A1 AS DateTime), CAST(0x0000A996011EF78A AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (6, N'cct', N'Cost Center', CAST(0x0000A9940128A842 AS DateTime), CAST(0x0000A996012B028E AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (7, N'rrtdone', N'Category', CAST(0x0000A994012937AA AS DateTime), CAST(0x0000A99601255876 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (8, N'cct', N'Category', CAST(0x0000A9940129564A AS DateTime), CAST(0x0000A996012B0F62 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (9, N'rrps', N'Category', CAST(0x0000A99401386B46 AS DateTime), CAST(0x0000A996011EF78B AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (10, N'ssss', N'Reference', CAST(0x0000A9940139FAA7 AS DateTime), CAST(0x0000A996011EE4FD AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (11, N'rrrrttt', N'Category', CAST(0x0000A9940153EE35 AS DateTime), CAST(0x0000A996011EF78E AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (12, N'tts', N'Category', CAST(0x0000A9940156BF10 AS DateTime), CAST(0x0000A996012AE0B7 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (13, N'ref2', N'Category', CAST(0x0000A99600C6A3FF AS DateTime), CAST(0x0000A996011EF79B AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (15, N'cct', N'Cost Center', CAST(0x0000A99600CFA088 AS DateTime), CAST(0x0000A996011EDB99 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (16, N'tate', N'Reference', CAST(0x0000A99600CFB4AA AS DateTime), CAST(0x0000A996011EE4FF AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (17, N'Catb', N'Category', CAST(0x0000A99600CFD7F2 AS DateTime), CAST(0x0000A996011EF7A6 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (19, N'FidesNew', N'Cost Center', CAST(0x0000A99900D61966 AS DateTime), CAST(0x0000A99900D64E40 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (31, N'Tsest', N'Category', CAST(0x0000A9AC000B5EDF AS DateTime), CAST(0x0000A9AC000B5EDF AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (32, N'lalala', N'Category', CAST(0x0000A9AC000C0938 AS DateTime), CAST(0x0000A9AC000C0938 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (33, N'ccccc', N'Category', CAST(0x0000A9AC000C32EF AS DateTime), CAST(0x0000A9AC000C32EF AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (34, N'Hey', N'Cost Center', CAST(0x0000A9AC000C4FDD AS DateTime), CAST(0x0000A9AC000C4FDD AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (35, N'TestRef', N'Reference', CAST(0x0000A9AC000C839B AS DateTime), CAST(0x0000A9AC000C839B AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (36, N'TestRef New', N'Reference', CAST(0x0000A9AC000C95FC AS DateTime), CAST(0x0000A9AC000C95FC AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (37, N'LKLK', N'Category', CAST(0x0000A9AC000CC5F4 AS DateTime), CAST(0x0000A9AC000CC5F4 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (38, N'LKLKDFVV', N'Category', CAST(0x0000A9AC000CD872 AS DateTime), CAST(0x0000A9AC000CD872 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (39, N'Test New', N'Category', CAST(0x0000A9AC000D09C7 AS DateTime), CAST(0x0000A9AC000D09C7 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (40, N'tesKD', N'Reference', CAST(0x0000A9C0015B6985 AS DateTime), CAST(0x0000A9C0015B6985 AS DateTime), 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (62, N'Andhra Pradesh', N'DeliveryIn', CAST(0x0000A9EC00A29EB6 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (63, N'Goa', N'DeliveryIn', CAST(0x0000A9EC00A29EB7 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (64, N'Jharkhand', N'DeliveryIn', CAST(0x0000A9EC00A29EB7 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (65, N'Maharashtra', N'DeliveryIn', CAST(0x0000A9EC00A29EB8 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (66, N'Normal', N'Quota', CAST(0x0000A9EC00A61504 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (67, N'Branch Purchase', N'Quota', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (68, N'Import', N'Quota', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (69, N'Franchisee', N'Quota', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (70, N'Add', N'ChargesTax', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (71, N'Less', N'ChargesTax', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (72, N'No', N'SrvCharge', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (73, N'Yes', N'SrvCharge', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (74, N'All', N'SrvCharge', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (75, N'Purchased T.C.', N'CurrencyNote', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (76, N'Forex Card', N'CurrencyNote', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (77, N'Reload Forex Card', N'CurrencyNote', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (78, N'Encashed T.C.', N'CurrencyNote', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (79, N'Enc.Forex Card', N'CurrencyNote', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (80, N'Fx Draft', N'CurrencyNote', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (81, N'Rate', N'ForexPaiseQty', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
INSERT [dbo].[OtherMasters] ([id], [Name], [Type], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (82, N'Paise/Qty', N'ForexPaiseQty', CAST(0x0000A9EC00A61505 AS DateTime), NULL, 0)
SET IDENTITY_INSERT [dbo].[OtherMasters] OFF
/****** Object:  Table [dbo].[BulkPurchaseForex]    Script Date: 02/06/2019 18:37:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BulkPurchaseForex](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[BulkPurchaseId] [int] NOT NULL,
	[CurrencyName] [int] NULL,
	[CurrencyNote] [int] NULL,
	[Quantity] [int] NULL,
	[Rate] [decimal](29, 4) NULL,
	[GrossAmt] [decimal](29, 4) NULL,
	[CalculatedGross] [decimal](29, 4) NULL,
	[BrokerPaise] [int] NULL,
	[BrokerPaiseAmt] [decimal](29, 4) NULL,
	[BrokerCommAmt] [decimal](29, 4) NULL,
	[BrokerTDSPercentage] [decimal](29, 4) NULL,
	[BrokerTDSAmt] [decimal](29, 4) NULL,
	[SubBrokerPaise] [int] NULL,
	[SubBrokerPaiseAmt] [decimal](29, 4) NULL,
	[SubBrokerCommAmt] [decimal](29, 4) NULL,
	[SubBrokerTDSPercentage] [decimal](29, 4) NULL,
	[SubBrokerTDSAmt] [decimal](29, 4) NULL,
	[CreatedDate] [datetime] NULL CONSTRAINT [DF_BulkPurchaseForex_CreatedDate]  DEFAULT (getdate()),
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [bit] NULL CONSTRAINT [DF_BulkPurchaseForex_IsDeleted]  DEFAULT ((0)),
 CONSTRAINT [PK_BulkPurchaseForex] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  ForeignKey [FK_BulkPurchaseForex_BulkPurchase]    Script Date: 02/06/2019 18:37:46 ******/
ALTER TABLE [dbo].[BulkPurchaseForex]  WITH CHECK ADD  CONSTRAINT [FK_BulkPurchaseForex_BulkPurchase] FOREIGN KEY([BulkPurchaseId])
REFERENCES [dbo].[BulkPurchase] ([Id])
GO
ALTER TABLE [dbo].[BulkPurchaseForex] CHECK CONSTRAINT [FK_BulkPurchaseForex_BulkPurchase]
GO
