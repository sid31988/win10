USE [win10master]
GO
/****** Object:  StoredProcedure [dbo].[sp_checklogin]    Script Date: 01/31/2019 20:44:23 ******/
DROP PROCEDURE [dbo].[sp_checklogin]
GO
/****** Object:  StoredProcedure [dbo].[spInsertAccounting]    Script Date: 01/31/2019 20:44:23 ******/
DROP PROCEDURE [dbo].[spInsertAccounting]
GO
/****** Object:  StoredProcedure [dbo].[spInsertAdditionalData]    Script Date: 01/31/2019 20:44:23 ******/
DROP PROCEDURE [dbo].[spInsertAdditionalData]
GO
/****** Object:  StoredProcedure [dbo].[spRegisterUser]    Script Date: 01/31/2019 20:44:23 ******/
DROP PROCEDURE [dbo].[spRegisterUser]
GO
/****** Object:  StoredProcedure [dbo].[GetCompanyRecords]    Script Date: 01/31/2019 20:44:23 ******/
DROP PROCEDURE [dbo].[GetCompanyRecords]
GO
/****** Object:  Table [dbo].[OtherMasters]    Script Date: 01/31/2019 20:44:23 ******/
ALTER TABLE [dbo].[OtherMasters] DROP CONSTRAINT [DF_OtherMaster_IsActive]
GO
DROP TABLE [dbo].[OtherMasters]
GO
/****** Object:  Table [dbo].[PartyMasters]    Script Date: 01/31/2019 20:44:23 ******/
DROP TABLE [dbo].[PartyMasters]
GO
/****** Object:  Table [dbo].[TCMasters]    Script Date: 01/31/2019 20:44:23 ******/
DROP TABLE [dbo].[TCMasters]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 01/31/2019 20:44:23 ******/
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [DF_usermaster_cocode]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [DF_usermaster_usercode]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [DF_usermaster_username]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [DF_usermaster_userdesignation]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [DF_usermaster_useremail]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [DF_usermaster_usermobile]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [DF_usermaster_usertype]
GO
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [DF_usermaster_rcode]
GO
DROP TABLE [dbo].[Users]
GO
/****** Object:  Table [dbo].[Accountings]    Script Date: 01/31/2019 20:44:22 ******/
ALTER TABLE [dbo].[Accountings] DROP CONSTRAINT [DF_Accountings_SubId]
GO
DROP TABLE [dbo].[Accountings]
GO
/****** Object:  Table [dbo].[AdditionalData]    Script Date: 01/31/2019 20:44:22 ******/
DROP TABLE [dbo].[AdditionalData]
GO
/****** Object:  UserDefinedTableType [dbo].[AdditionalTable]    Script Date: 01/31/2019 20:44:24 ******/
DROP TYPE [dbo].[AdditionalTable]
GO
/****** Object:  Table [dbo].[Companies]    Script Date: 01/31/2019 20:44:22 ******/
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_cocode]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_domain]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_coname]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_cosname]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_coaddr1]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_coaddr2]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_coaddr3]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_cocity]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_costate]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_copincode]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_cotelno1]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_cotelno2]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_coemail]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_coregno1]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_coregno2]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_coregno3]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_coparams]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_codbversion]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_coystart]
GO
ALTER TABLE [dbo].[Companies] DROP CONSTRAINT [DF_comdb_codbquerystring]
GO
DROP TABLE [dbo].[Companies]
GO
/****** Object:  Table [dbo].[CountryMasters]    Script Date: 01/31/2019 20:44:22 ******/
DROP TABLE [dbo].[CountryMasters]
GO
/****** Object:  Table [dbo].[CurrencyMasters]    Script Date: 01/31/2019 20:44:23 ******/
DROP TABLE [dbo].[CurrencyMasters]
GO
/****** Object:  UserDefinedFunction [dbo].[DecryptString]    Script Date: 01/31/2019 20:44:23 ******/
DROP FUNCTION [dbo].[DecryptString]
GO
/****** Object:  UserDefinedFunction [dbo].[EncryptString]    Script Date: 01/31/2019 20:44:23 ******/
DROP FUNCTION [dbo].[EncryptString]
GO
/****** Object:  UserDefinedFunction [dbo].[EncryptString]    Script Date: 01/31/2019 20:44:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE  function [dbo].[EncryptString]
(
@passphrase varchar(50),
@text varchar(100)
)
Returns
varbinary(max)
as
begin

return EncryptByPassphrase(@passphrase,@text);

end
GO
/****** Object:  UserDefinedFunction [dbo].[DecryptString]    Script Date: 01/31/2019 20:44:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date, ,>
-- Description:	<Description, ,>
-- =============================================
CREATE function [dbo].[DecryptString]
(
@passphrase varchar(50),
@encryptedText varbinary(max)
)
Returns
varchar(100)
as
begin

return CONVERT(varchar(100), DecryptByPassphrase(@passphrase,@encryptedText));

end
GO
/****** Object:  Table [dbo].[CurrencyMasters]    Script Date: 01/31/2019 20:44:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CurrencyMasters](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CurrencyCode] [nvarchar](5) NOT NULL,
	[CurrencyName] [nvarchar](50) NULL,
	[AFType] [nvarchar](50) NULL,
	[RBI] [nvarchar](50) NULL,
	[Rate] [int] NULL,
	[Position] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_CurrencyMasters] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[CurrencyCode] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CurrencyMasters] ON
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, N'USD', N'US Dollar', N'test', N'test', 1, 99, CAST(0x0000A9BE013A9F7D AS DateTime), CAST(0x0000A9BE013A9FFF AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (2, N'INR', N'Indian Rupee', NULL, NULL, 1, 99, CAST(0x0000A9BE013AD101 AS DateTime), CAST(0x0000A9BE013AD101 AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (3, N'BHD', N'Bahrain Dinar', NULL, NULL, 1, 95, CAST(0x0000A9BE013B4343 AS DateTime), CAST(0x0000A9BE013B43C5 AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (4, N'CAD', N'Canada Dollar', NULL, NULL, 1, 95, CAST(0x0000A9BE013B8950 AS DateTime), CAST(0x0000A9BE013B89F0 AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (5, N'GBP', N'Pounds', N'asd', N'asc', 1, 99, CAST(0x0000A9C200FCE824 AS DateTime), CAST(0x0000A9C200FCE824 AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (8, N'qqq', N'qqq', N'qq', N'qq', 12, 12, CAST(0x0000A9D400D4E39F AS DateTime), CAST(0x0000A9D400D4E39F AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (9, N'abcd', N'abcd', N'aa', N'aa', 11, 11, CAST(0x0000A9D400E9D66F AS DateTime), CAST(0x0000A9D400E9D66F AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (10, N'WW', N'WW', N'WW', N'WW', 11, 11, CAST(0x0000A9D400F077DB AS DateTime), CAST(0x0000A9D400F077DB AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (11, N'jj', N'jj', N'jj', N'jj', 11, 11, CAST(0x0000A9D400F3F171 AS DateTime), CAST(0x0000A9D400F3F1C0 AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (13, N'www', N'www', N'w', N'w', 11, 11, CAST(0x0000A9D40133FFD7 AS DateTime), CAST(0x0000A9D40133FFD7 AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (15, N'H', N'H', N'H', N'H', 1, 1, CAST(0x0000A9D50115D359 AS DateTime), CAST(0x0000A9D50115D359 AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (16, N'H1', N'H1', N'H1', N'H1', 1, 1, CAST(0x0000A9D50115E327 AS DateTime), CAST(0x0000A9D50115E327 AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (17, N'abcd1', N'abcd1', N'aa', N'aa', 11, 11, CAST(0x0000A9D6013AAE82 AS DateTime), CAST(0x0000A9D6013AAE82 AS DateTime), 0)
INSERT [dbo].[CurrencyMasters] ([Id], [CurrencyCode], [CurrencyName], [AFType], [RBI], [Rate], [Position], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (18, N'AA111', N'AA111', N'a', N'a', 1, 1, CAST(0x0000A9D6015349EA AS DateTime), CAST(0x0000A9D6015349EA AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[CurrencyMasters] OFF
/****** Object:  Table [dbo].[CountryMasters]    Script Date: 01/31/2019 20:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CountryMasters](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[CountryCode] [nvarchar](5) NULL,
	[CountryName] [nvarchar](50) NULL,
	[Nationality] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_CountryMasters] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[CountryCode] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CountryMasters] ON
INSERT [dbo].[CountryMasters] ([id], [CountryCode], [CountryName], [Nationality], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, N'US', N'United States', N'American', CAST(0x0000A9C00152D97B AS DateTime), CAST(0x0000A9C00152D97B AS DateTime), 0)
INSERT [dbo].[CountryMasters] ([id], [CountryCode], [CountryName], [Nationality], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (2, N'aaa', N'aaaa', N'aaaa', CAST(0x0000A9D201222421 AS DateTime), CAST(0x0000A9D201222421 AS DateTime), 0)
INSERT [dbo].[CountryMasters] ([id], [CountryCode], [CountryName], [Nationality], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (3, N'qq', N'qq', N'indian', CAST(0x0000A9D4010DF4A8 AS DateTime), CAST(0x0000A9D4010DF4A8 AS DateTime), 0)
INSERT [dbo].[CountryMasters] ([id], [CountryCode], [CountryName], [Nationality], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (4, N'qq1', N'qq1', N'indian', CAST(0x0000A9D4010E040B AS DateTime), CAST(0x0000A9D4010E040B AS DateTime), 0)
INSERT [dbo].[CountryMasters] ([id], [CountryCode], [CountryName], [Nationality], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (5, N'aa', N'aa', N'aa', CAST(0x0000A9DF0134C4C6 AS DateTime), CAST(0x0000A9DF0134C4C6 AS DateTime), 0)
INSERT [dbo].[CountryMasters] ([id], [CountryCode], [CountryName], [Nationality], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (6, N'aa1', N'aa1', N'aa1', CAST(0x0000A9DF0134D780 AS DateTime), CAST(0x0000A9DF0134D780 AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[CountryMasters] OFF
/****** Object:  Table [dbo].[Companies]    Script Date: 01/31/2019 20:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Companies](
	[cocode] [char](6) NOT NULL CONSTRAINT [DF_comdb_cocode]  DEFAULT (''),
	[domain] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_domain]  DEFAULT (''),
	[coname] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_coname]  DEFAULT (''),
	[cosname] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_cosname]  DEFAULT (''),
	[coaddr1] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_coaddr1]  DEFAULT (''),
	[coaddr2] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_coaddr2]  DEFAULT (''),
	[coaddr3] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_coaddr3]  DEFAULT (''),
	[cocity] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_cocity]  DEFAULT (''),
	[costate] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_costate]  DEFAULT (''),
	[copincode] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_copincode]  DEFAULT (''),
	[cotelno1] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_cotelno1]  DEFAULT (''),
	[cotelno2] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_cotelno2]  DEFAULT (''),
	[coemail] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_coemail]  DEFAULT (''),
	[coregno1] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_coregno1]  DEFAULT (''),
	[coregno2] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_coregno2]  DEFAULT (''),
	[coregno3] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_coregno3]  DEFAULT (''),
	[coparams] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_coparams]  DEFAULT (''),
	[codbversion] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_codbversion]  DEFAULT (''),
	[coystart] [varchar](256) NOT NULL CONSTRAINT [DF_comdb_coystart]  DEFAULT (''),
	[codbquerystring] [nvarchar](max) NOT NULL CONSTRAINT [DF_comdb_codbquerystring]  DEFAULT (''),
 CONSTRAINT [PK_comdb] PRIMARY KEY CLUSTERED 
(
	[cocode] ASC,
	[coystart] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[Companies] ([cocode], [domain], [coname], [cosname], [coaddr1], [coaddr2], [coaddr3], [cocity], [costate], [copincode], [cotelno1], [cotelno2], [coemail], [coregno1], [coregno2], [coregno3], [coparams], [codbversion], [coystart], [codbquerystring]) VALUES (N'X00100', N'abc', N'WIN-10 FOREX PVT. LTD.', N'DEMO', N'A1', N'A2', N'A3', N'MUMBAI', N'MAHARASHTRA', N'400066', N'0251 426331', N'+919820425678', N'jeeten.thakkar@win10-tech.in', N'27AAZPT2990B1Z2', N'AAZPT2990B', N'FE.MUM 1234/200', N'Y', N'1', N'2017', N'Data Source=GOLDSTEIN; Initial Catalog=win10t17; Integrated Security=True;')
INSERT [dbo].[Companies] ([cocode], [domain], [coname], [cosname], [coaddr1], [coaddr2], [coaddr3], [cocity], [costate], [copincode], [cotelno1], [cotelno2], [coemail], [coregno1], [coregno2], [coregno3], [coparams], [codbversion], [coystart], [codbquerystring]) VALUES (N'X00100', N'abc', N'WIN-10 FOREX PVT. LTD.', N'DEMO', N'A1', N'A2', N'A3', N'MUMBAI', N'MAHARASHTRA', N'400066', N'0251 426331', N'+919820425678', N'jeeten.thakkar@win10-tech.in', N'27AAZPT2990B1Z2', N'AAZPT2990B', N'FE.MUM 1234/200', N'Y', N'1', N'2018', N'Data Source=GOLDSTEIN; Initial Catalog=win10t17; Integrated Security=True;')
INSERT [dbo].[Companies] ([cocode], [domain], [coname], [cosname], [coaddr1], [coaddr2], [coaddr3], [cocity], [costate], [copincode], [cotelno1], [cotelno2], [coemail], [coregno1], [coregno2], [coregno3], [coparams], [codbversion], [coystart], [codbquerystring]) VALUES (N'X00101', N'abc', N'WIN-10 FOREX PVT. LTD.', N'DEMO', N'A1', N'A2', N'A3', N'MUMBAI', N'MAHARASHTRA', N'400066', N'0251 426331', N'+919820425678', N'jeeten.thakkar@win10-tech.in', N'27AAZPT2990B1Z2', N'AAZPT2990B', N'FE.MUM 1234/200', N'Y', N'1', N'2018', N'Data Source=GOLDSTEIN; Initial Catalog=win10t17; Integrated Security=True;')
/****** Object:  UserDefinedTableType [dbo].[AdditionalTable]    Script Date: 01/31/2019 20:44:24 ******/
CREATE TYPE [dbo].[AdditionalTable] AS TABLE(
	[id] [int] NULL,
	[Table] [nvarchar](50) NULL,
	[Column] [nvarchar](50) NULL,
	[Value] [nvarchar](max) NULL,
	[ReferenceId] [nvarchar](max) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [bit] NULL
)
GO
/****** Object:  Table [dbo].[AdditionalData]    Script Date: 01/31/2019 20:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdditionalData](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[Table] [nvarchar](50) NULL,
	[Column] [nvarchar](50) NULL,
	[Value] [nvarchar](max) NULL,
	[Refrenceid] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_AdditionalData] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AdditionalData] ON
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, N'anbjsn', N'anbjsn', N'anbjsn', N'12', CAST(0x0000A9CC00EA2D9E AS DateTime), CAST(0x0000A9CC00EA2D9E AS DateTime), 1)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (2, N'Accountings', N'BANKAC', N'asdsad', N'14', CAST(0x0000A9CC00EF206C AS DateTime), CAST(0x0000A9CC00EF206C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (3, N'Accountings', N'BRANCH', N'asd', N'14', CAST(0x0000A9CC00EF206C AS DateTime), CAST(0x0000A9CC00EF206C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (4, N'Accountings', N'CONTDTLS', N'sad', N'14', CAST(0x0000A9CC00EF206C AS DateTime), CAST(0x0000A9CC00EF206C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (5, N'Accountings', N'BRS', N'2019-01-01', N'14', CAST(0x0000A9CC00EF206C AS DateTime), CAST(0x0000A9CC00EF206C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (6, N'Accountings', N'CHQTEMP', N'1212121', N'14', CAST(0x0000A9CC00EF206C AS DateTime), CAST(0x0000A9CC00EF206C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (7, N'Accountings', N'CHQDT', N'1', N'14', CAST(0x0000A9CC00EF206C AS DateTime), CAST(0x0000A9CC00EF206C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (8, N'Accountings', N'RCPTCHQ', N'1', N'14', CAST(0x0000A9CC00EF206C AS DateTime), CAST(0x0000A9CC00EF206C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (9, N'Accountings', N'PDCHQNO', N'1', N'14', CAST(0x0000A9CC00EF206C AS DateTime), CAST(0x0000A9CC00EF206C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (10, N'Accountings', N'DTFORM', N'dd/mm/yyyy', N'14', CAST(0x0000A9CC00EF206C AS DateTime), CAST(0x0000A9CC00EF206C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (11, N'Accountings', N'BANKAC', N'asd', N'150', CAST(0x0000A9CC00F16D8C AS DateTime), CAST(0x0000A9CC00F16D8C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (12, N'Accountings', N'BRANCH', N'asd', N'150', CAST(0x0000A9CC00F16D8C AS DateTime), CAST(0x0000A9CC00F16D8C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (13, N'Accountings', N'CONTDTLS', N'asd', N'150', CAST(0x0000A9CC00F16D8C AS DateTime), CAST(0x0000A9CC00F16D8C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (14, N'Accountings', N'BRS', N'2019-01-17', N'150', CAST(0x0000A9CC00F16D8C AS DateTime), CAST(0x0000A9CC00F16D8C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (15, N'Accountings', N'CHQTEMP', N'1121', N'150', CAST(0x0000A9CC00F16D8C AS DateTime), CAST(0x0000A9CC00F16D8C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (16, N'Accountings', N'CHQDT', N'2', N'150', CAST(0x0000A9CC00F16D8C AS DateTime), CAST(0x0000A9CC00F16D8C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (17, N'Accountings', N'RCPTCHQ', N'1', N'150', CAST(0x0000A9CC00F16D8C AS DateTime), CAST(0x0000A9CC00F16D8C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (18, N'Accountings', N'PDCHQNO', N'1', N'150', CAST(0x0000A9CC00F16D8C AS DateTime), CAST(0x0000A9CC00F16D8C AS DateTime), 0)
INSERT [dbo].[AdditionalData] ([id], [Table], [Column], [Value], [Refrenceid], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (19, N'Accountings', N'DTFORM', N'dd/mm/yyyy', N'150', CAST(0x0000A9CC00F16D8C AS DateTime), CAST(0x0000A9CC00F16D8C AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[AdditionalData] OFF
/****** Object:  Table [dbo].[Accountings]    Script Date: 01/31/2019 20:44:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Accountings](
	[id] [int] NOT NULL,
	[SubId] [int] NOT NULL CONSTRAINT [DF_Accountings_SubId]  DEFAULT ((0)),
	[Desc] [nvarchar](150) NULL,
	[Type] [nvarchar](50) NULL,
	[HSNSAC] [nvarchar](50) NULL,
	[GrpUnder] [nvarchar](50) NULL,
	[Block] [nvarchar](5) NULL,
	[Balance] [nvarchar](50) NULL,
	[BalancePost] [nvarchar](50) NULL,
	[NOF] [nvarchar](5) NULL,
	[CreatedDate] [datetime] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_Accountings] PRIMARY KEY CLUSTERED 
(
	[id] ASC,
	[SubId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 0, N'Test1', N'Title', NULL, NULL, N'N', N'1000', N'Dr', N'N', NULL, NULL, 0)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 1, N'test', N'Normal', N'asa', N'Test1', N'Y', N'21121', N'Cr', N'Y', CAST(0x0000A9BE00ADB20D AS DateTime), CAST(0x0000A9BE00ADB20D AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 2, N'asd', N'Normal', N'asd', N'Test1', N'N', N'25252', N'Dr', N'Y', CAST(0x0000A9BE00AF5835 AS DateTime), CAST(0x0000A9BE00AF5835 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 3, N'asdasdvasdvasdcas', N'Normal', N'assdcv', N'Test1sdvsad', N'Y', N'2525', N'Dr', N'Y', CAST(0x0000A9BE00AF8F05 AS DateTime), CAST(0x0000A9BE00AF8F05 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 4, N'asd', N'Normal', N'3232', N'Test1', N'Y', N'12121', N'Dr', N'Y', CAST(0x0000A9BE00B07E30 AS DateTime), CAST(0x0000A9BE00B07E30 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 5, N'asdasdvasdvcasdfvasdvasdvcsd', N'Cash', N'asd', N'test', N'Y', N'2121', N'Dr', N'Y', CAST(0x0000A9BE00B5C4A6 AS DateTime), CAST(0x0000A9BE00B5C4A6 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 6, N'yukfyuk', N'Cash', N'jhkfhj', N'Test1sdvsad', N'Y', N'3636', N'Cr', N'Y', CAST(0x0000A9BE00B6C8AB AS DateTime), CAST(0x0000A9BE00B6C8AB AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 7, N'ghmfdgh', N'Normal', N'hmfgh', N'adfv', N'Y', N'23333', N'Dr', N'Y', CAST(0x0000A9BE00B7066E AS DateTime), CAST(0x0000A9BE00B7066E AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 8, N'ghmfdghasdvasdvasdvdsvsdv', N'Normal', N'hmfgh', N'adfv', N'Y', N'23333', N'Dr', N'Y', CAST(0x0000A9BE00B73B99 AS DateTime), CAST(0x0000A9BE00B73B99 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 9, N'adfsgvasdvg', N'Normal', N'asdvgasd', N'test', N'Y', N'1231', N'Dr', N'Y', CAST(0x0000A9BE00B78DDB AS DateTime), CAST(0x0000A9BE00B78DDB AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 10, N'Kuildee', N'Normal', N'asdvasd', N'test', N'Y', N'36363', N'Cr', N'Y', CAST(0x0000A9BE00B9A130 AS DateTime), CAST(0x0000A9BE00B9A130 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 11, N'asdasdvasdvasdcas', N'Normal', N'assdcv', N'Test1sdvsad', N'Y', N'2525', N'Dr', N'Y', CAST(0x0000A9D300C5A686 AS DateTime), CAST(0x0000A9D300C5A686 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (1, 12, N'1234', N'Normal', N'assdcv', N'Test1sdvsad', N'Y', N'2525', N'Dr', N'Y', CAST(0x0000A9D300C5BDA8 AS DateTime), CAST(0x0000A9D300C5BDA8 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (2, 0, N'Test2', N'Normal', NULL, NULL, N'N', N'0', N'Cr', N'N', NULL, NULL, NULL)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (2, 1, N'Test3', N'Normal', N'', NULL, N'N', N'0', N'Dr', N'N', NULL, NULL, NULL)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (2, 2, N'asdvca', N'Normal', N'1251', N'test', N'Y', N'212121', N'Dr', N'Y', CAST(0x0000A9BE00B0180B AS DateTime), CAST(0x0000A9BE00B0180B AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (2, 3, N'dfbdf', N'Normal', N'dfbdf', N'Test1sdvsad', N'Y', N'1212121', N'Cr', N'Y', CAST(0x0000A9BE00B65DBD AS DateTime), CAST(0x0000A9BE00B65DBD AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (3, 0, N'test', N'Title', N'asa', N'Test1', N'Y', N'1000.0', N'Dr', N'Y', CAST(0x0000A9BE00649DA5 AS DateTime), CAST(0x0000A9BE00649DA5 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (4, 0, N'as', N'Normal', N'asc', N'Test1', N'Y', N'122', N'Dr', N'Y', CAST(0x0000A9BE00783C1C AS DateTime), CAST(0x0000A9BE00783C1C AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (5, 0, N'Test1sdvsad', N'Title', N'asdvcas', N'test', N'N', N'1000', N'Dr', N'N', CAST(0x0000A9BE00AE241A AS DateTime), CAST(0x0000A9BE00AE241A AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (6, 0, N'adfv', N'Title', N'asdv', N'Test1', N'Y', N'12121', N'Dr', N'Y', CAST(0x0000A9BE00B150EC AS DateTime), CAST(0x0000A9BE00B150EC AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (7, 0, N'asdv', N'Title', N'dsv', N'Test1', N'N', N'111521', N'Dr', N'Y', CAST(0x0000A9BE00B1AA73 AS DateTime), CAST(0x0000A9BE00B1AA73 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (8, 0, N'asd', N'Cash', N'asd', N'test', N'Y', N'2121', N'Dr', N'Y', CAST(0x0000A9BE00B432BF AS DateTime), CAST(0x0000A9BE00B432BF AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (9, 0, N'dfb', N'Cash', N'sdv', N'Test1', N'Y', N'1212', N'Dr', N'N', CAST(0x0000A9CC00E698D8 AS DateTime), CAST(0x0000A9CC00E698D8 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (10, 0, N'dfb', N'Cash', N'sdv', N'Test1', N'Y', N'1212', N'Dr', N'N', CAST(0x0000A9CC00E6CB3D AS DateTime), CAST(0x0000A9CC00E6CB3D AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (11, 0, N'ghj', N'Normal', N'ads', N'Test1', N'Y', N'1515', N'Dr', N'Y', CAST(0x0000A9CC00E8BE32 AS DateTime), CAST(0x0000A9CC00E8BE32 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (12, 0, N'dfvasd', N'Normal', N'sadvc', N'Test1', N'Y', N'121', N'Cr', N'Y', CAST(0x0000A9CC00EA1A63 AS DateTime), CAST(0x0000A9CC00EA1A63 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (13, 0, N'asd', N'Normal', N'sdasd', N'Test1', N'Y', N'1212121', N'Dr', N'Y', CAST(0x0000A9CC00EEB625 AS DateTime), CAST(0x0000A9CC00EEB625 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (14, 0, N'asdsdvasd', N'Bank', N'sdasd', N'Test1', N'Y', N'1212121', N'Dr', N'Y', CAST(0x0000A9CC00EF1E70 AS DateTime), CAST(0x0000A9CC00EF1E70 AS DateTime), 1)
INSERT [dbo].[Accountings] ([id], [SubId], [Desc], [Type], [HSNSAC], [GrpUnder], [Block], [Balance], [BalancePost], [NOF], [CreatedDate], [UpdatedDate], [IsDeleted]) VALUES (15, 0, N'fghg', N'Bank', N'asd', N'test', N'N', N'25121', N'Dr', N'Y', CAST(0x0000A9CC00F16ABF AS DateTime), CAST(0x0000A9CC00F16ABF AS DateTime), 1)
/****** Object:  Table [dbo].[Users]    Script Date: 01/31/2019 20:44:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Users](
	[cocode] [varchar](128) NOT NULL CONSTRAINT [DF_usermaster_cocode]  DEFAULT (''),
	[usercode] [varchar](128) NOT NULL CONSTRAINT [DF_usermaster_usercode]  DEFAULT (''),
	[username] [varchar](128) NOT NULL CONSTRAINT [DF_usermaster_username]  DEFAULT (''),
	[userdesignation] [varchar](128) NOT NULL CONSTRAINT [DF_usermaster_userdesignation]  DEFAULT (''),
	[useremail] [varchar](128) NOT NULL CONSTRAINT [DF_usermaster_useremail]  DEFAULT (''),
	[passphrase] [nvarchar](100) NULL,
	[usermobile] [varchar](128) NOT NULL CONSTRAINT [DF_usermaster_usermobile]  DEFAULT (''),
	[usertype] [varchar](128) NOT NULL CONSTRAINT [DF_usermaster_usertype]  DEFAULT (''),
	[rcode] [varchar](128) NOT NULL CONSTRAINT [DF_usermaster_rcode]  DEFAULT (''),
	[password] [varbinary](max) NULL,
 CONSTRAINT [PK_usermaster] PRIMARY KEY CLUSTERED 
(
	[cocode] ASC,
	[usercode] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[Users] ([cocode], [usercode], [username], [userdesignation], [useremail], [passphrase], [usermobile], [usertype], [rcode], [password]) VALUES (N'X00101', N'1', N'admin', N'administrator', N'admin@demo', N'A6F60D2D-DE05-4956-AF6C-F24803D6B3AC', N'9876543210', N'G', N'A0001', 0x010000000472CD030190C0DFBC484F4F434F8046BBA57B4F3B265DFE)
/****** Object:  Table [dbo].[TCMasters]    Script Date: 01/31/2019 20:44:23 ******/
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
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (64, CAST(0x0000A9DF00000000 AS DateTime), N'IDBI', N'IDB', N'IDB', 10010, 10, 10100, 100, 100, N'ReceiveTrust', NULL, CAST(0x0000A9DF010DA2F9 AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (65, CAST(0x0000A9CE00000000 AS DateTime), N'11', N'111', N'11', 101, 1, 1051, 1001, 1, N'ReceiveTrust', NULL, CAST(0x0000A9E6012D2631 AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (66, CAST(0x0000A9E500000000 AS DateTime), N'ICICI', N'ICI', N'ICI', 10010, 222, 10100, 111, 111, N'ReceiveTrust', NULL, CAST(0x0000A9E6012FBB51 AS DateTime), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (67, CAST(0x0000A9CB00000000 AS DateTime), N'demo11', N'demo', N'demp1', 1, 1, 1, 1, 1, N'ReceiveTrust', NULL, CAST(0x0000A9E6012D2AB5 AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (68, CAST(0x0000A9E600000000 AS DateTime), N'IDBI', N'IDB1', N'IDB1', 1100, 1100, 1110, 1110, 1114, N'ReceiveTrust', CAST(0x0000A9E600FAB045 AS DateTime), CAST(0x0000A9E6012FB3BF AS DateTime), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (69, CAST(0x0000A9E600000000 AS DateTime), N'ICICI', N'ICI', N'ICI', 100, 1111, 1110, 110, 1100, N'ReceiveTrust', CAST(0x0000A9E601007EF7 AS DateTime), CAST(0x0000A9E601009E17 AS DateTime), 0, NULL, NULL, NULL, NULL)
INSERT [dbo].[TCMasters] ([Id], [Date], [Issuer], [Curr], [Prefix], [StartNo], [Nos], [EndNo], [Deno], [Value], [Type], [CreatedDate], [UpdatedDate], [IsDeleted], [RefrNo], [CardNo], [ProxyNo], [ExpDate]) VALUES (70, CAST(0x0000A9E600000000 AS DateTime), N'aasa', N'aa', N'aa', 1110, 1111, 111, 111, 11, N'ReceiveTrust', CAST(0x0000A9E6010C228C AS DateTime), CAST(0x0000A9E6010C2FC3 AS DateTime), 0, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[TCMasters] OFF
/****** Object:  Table [dbo].[PartyMasters]    Script Date: 01/31/2019 20:44:23 ******/
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
	[CreatedDate] [datetime] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsDeleted] [datetime] NULL,
 CONSTRAINT [PK_PartiesMaster] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OtherMasters]    Script Date: 01/31/2019 20:44:23 ******/
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
SET IDENTITY_INSERT [dbo].[OtherMasters] OFF
/****** Object:  StoredProcedure [dbo].[GetCompanyRecords]    Script Date: 01/31/2019 20:44:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Kuldeep>
-- Create date: <10/02/2018>
-- Description:	<Getting Company Records>
-- =============================================
CREATE PROCEDURE [dbo].[GetCompanyRecords] 
	-- Add the parameters for the stored procedure here
	@domain nvarchar(50)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT * FROM Companies WHERE domain = @domain
END
GO
/****** Object:  StoredProcedure [dbo].[spRegisterUser]    Script Date: 01/31/2019 20:44:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spRegisterUser] --'X00101','1','ADMIN','administrator',''
	-- Add the parameters for the stored procedure here
	@cocode varchar(128),
	@usercode varchar(128),
	@username varchar(128),
	@userdesignation varchar(128),
	@useremail varchar(128),
	@usermobile varchar(128),
	@usertype varchar(128),
	@rcode varchar(128),
	@password varchar(128)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	declare @passphrase varchar(100)=newID();  
	declare @newpassword varbinary(MAX)= dbo.EncryptString(@passphrase,@password); 
	Insert into Users(cocode, usercode, username, userdesignation, useremail, passphrase, usermobile, usertype, rcode, [password])
	values
	(@cocode, @usercode, @username, @userdesignation, @useremail, @passphrase, @usermobile, @usertype, @rcode, @newpassword) 
END
GO
/****** Object:  StoredProcedure [dbo].[spInsertAdditionalData]    Script Date: 01/31/2019 20:44:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spInsertAdditionalData] 
	-- Add the parameters for the stored procedure here
	@AdditionalData [dbo].[AdditionalTable] ReadOnly
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	Insert Into AdditionalData
		select [Table], [Column], [Value], [ReferenceId],
		GETUTCDATE(), GETUTCDATE(),0 from @AdditionalData
END
GO
/****** Object:  StoredProcedure [dbo].[spInsertAccounting]    Script Date: 01/31/2019 20:44:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================


CREATE PROCEDURE [dbo].[spInsertAccounting] 
	-- Add the parameters for the stored procedure here
	@Desc nvarchar(150),
	@Type nvarchar(50),
	@HSNSAC nvarchar(50),
	@GrpUnder nvarchar(50),
	@Block nvarchar(5),
	@Balance nvarchar(50),
	@BalancePost nvarchar(50),
	@NOF nvarchar(5),
	@Id int = null

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	Declare @insertID int;
	Declare @SubInsertID int;
	if @Id Is Not Null
		Begin
			Set @insertID = @Id;
			Select Top 1 @SubInsertID = (ISNULL(SubId,0) + 1) from [dbo].[Accountings] where id = @Id order by SubId desc
		End
	else
		Begin
	
			 Select Top 1 @insertID = (ISNULL(id,0) +1) from [dbo].[Accountings] order by id desc
				Set @SubInsertID = 0;
		End
	



		Insert into [dbo].[Accountings](id, subid, [Desc], [Type], HSNSAC, [GrpUnder],
		[Block],[Balance],[BalancePost],[NOF],[CreatedDate], [UpdatedDate], [IsDeleted])
		values
		(@insertID, @SubInsertID, @Desc, @Type, @HSNSAC, @GrpUnder, @Block, @Balance, @BalancePost,
		@NOF, GETUTCDATE(), GETUTCDATE(), 1);

		Select @insertID as Id, @SubInsertID as SubId
		
END
GO
/****** Object:  StoredProcedure [dbo].[sp_checklogin]    Script Date: 01/31/2019 20:44:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_checklogin] 
	@companycode nvarchar(128),
	@username nvarchar(128),
	@password nvarchar(128)
	
AS
BEGIN
	--SET NOCOUNT ON;
	--SELECT usercode, rcode,username,cocode FROM usermaster WHERE cocode = @companycode AND username = @username AND password = @password
	SELECT usercode, rcode,username,cocode FROM Users WHERE cocode = @companycode AND username = @username AND dbo.DecryptString(passphrase,password)=@password
	--SELECT usercode, rcode FROM usermaster WHERE cocode = @companycode AND username = @username 
END
GO
